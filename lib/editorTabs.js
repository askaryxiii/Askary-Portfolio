import { useCallback, useMemo, useSyncExternalStore } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { routes, fileRoutes, getExtension } from '@/portfolio.config';
const STORAGE_KEY = 'openTabs';
const STORAGE_VERSION = 1;
const DEFAULT_TABS = fileRoutes.map(route => ({
    path: route.path,
    preview: false,
}));
const SERVER_STATE = { tabs: DEFAULT_TABS, hydrated: false };
const routesByPath = new Map(routes.map(route => [route.path, route]));
export const EXTENSION_PATH_PREFIX = '/extensions/';
// Static routes come from the config; extension detail pages are derived from
// the extensions list so they can open in tabs too
export const getRoute = (path) => {
    const route = routesByPath.get(path);
    if (route)
        return route;
    if (path.startsWith(EXTENSION_PATH_PREFIX)) {
        const extension = getExtension(path.slice(EXTENSION_PATH_PREFIX.length));
        if (extension) {
            return {
                path,
                label: `Extension: ${extension.name}`,
                icon: extension.icon,
            };
        }
    }
};
let state = null;
const listeners = new Set();
const save = (tabs) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: STORAGE_VERSION, tabs }));
    }
    catch {
        // Keep the in-memory editor usable when browser storage is unavailable.
    }
};
const load = () => {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
        const migrated = typeof saved === 'object' && saved !== null &&
            'version' in saved && saved.version === STORAGE_VERSION &&
            'tabs' in saved && Array.isArray(saved.tabs);
        const storedTabs = migrated ? saved.tabs : saved;
        if (Array.isArray(storedTabs)) {
            const savedTabs = storedTabs.filter((tab) => typeof tab?.path === 'string' &&
                typeof tab?.preview === 'boolean' &&
                getRoute(tab.path) !== undefined);
            // Only migrate old array-based storage once. Subsequent loads preserve
            // deliberate closures, including an entirely empty editor.
            if (migrated)
                return { tabs: savedTabs, hydrated: true };
            const tabs = savedTabs.map(tab => fileRoutes.some(route => route.path === tab.path)
                ? { ...tab, preview: false }
                : tab);
            const savedPaths = new Set(tabs.map(tab => tab.path));
            tabs.push(...DEFAULT_TABS.filter(tab => !savedPaths.has(tab.path)));
            save(tabs);
            return { tabs, hydrated: true };
        }
    }
    catch {
        // Ignore malformed saved state and start fresh
    }
    save(DEFAULT_TABS);
    return { tabs: DEFAULT_TABS, hydrated: true };
};
const getSnapshot = () => {
    if (!state)
        state = load();
    return state;
};
const getServerSnapshot = () => SERVER_STATE;
const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
};
const setTabs = (tabs) => {
    state = { tabs, hydrated: true };
    save(tabs);
    listeners.forEach(listener => listener());
};
export const useEditorTabs = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
export const openTab = (path, { pin = false, after } = {}) => {
    if (!getRoute(path))
        return;
    const { tabs } = getSnapshot();
    const existing = tabs.findIndex(tab => tab.path === path);
    if (existing !== -1) {
        if (pin && tabs[existing].preview) {
            setTabs(tabs.map(tab => (tab.path === path ? { ...tab, preview: false } : tab)));
        }
        return;
    }
    const newTab = { path, preview: !pin };
    const previewIndex = tabs.findIndex(tab => tab.preview);
    if (!pin && previewIndex !== -1) {
        setTabs(tabs.map((tab, i) => (i === previewIndex ? newTab : tab)));
        return;
    }
    const afterIndex = after ? tabs.findIndex(tab => tab.path === after) : -1;
    const insertAt = afterIndex === -1 ? tabs.length : afterIndex + 1;
    setTabs([...tabs.slice(0, insertAt), newTab, ...tabs.slice(insertAt)]);
};
// The initial URL gets a tab unless the visitor intentionally saved an empty
// editor. Later explicit navigation still opens tabs normally.
export const restoreActiveTab = (path) => {
    if (getSnapshot().tabs.length > 0)
        openTab(path, { pin: true });
};
export const pinTab = (path) => openTab(path, { pin: true });
// Closes a tab and returns the path of the tab that should become active if
// the closed one was active: its right neighbour, else its left, else null
export const closeTab = (path) => {
    const { tabs } = getSnapshot();
    const index = tabs.findIndex(tab => tab.path === path);
    if (index === -1)
        return null;
    const remaining = tabs.filter(tab => tab.path !== path);
    setTabs(remaining);
    return remaining[Math.min(index, remaining.length - 1)]?.path ?? null;
};
export const closeAllTabs = () => setTabs([]);
export const closeOtherTabs = (path) => setTabs(getSnapshot().tabs.filter(tab => tab.path === path));
export const moveTab = (fromPath, toPath) => {
    const { tabs } = getSnapshot();
    const from = tabs.findIndex(tab => tab.path === fromPath);
    const to = tabs.findIndex(tab => tab.path === toPath);
    if (from === -1 || to === -1 || from === to)
        return;
    const reordered = [...tabs];
    const [moved] = reordered.splice(from, 1);
    reordered.splice(to, 0, moved);
    setTabs(reordered);
};
// Tab operations that also navigate: opening a tab goes to its page, and
// closing the active tab moves to its neighbour
export const useEditorActions = () => {
    const pathname = usePathname();
    const router = useRouter();
    const open = useCallback((path, options = {}) => {
        openTab(path, { ...options, after: pathname });
        router.push(path);
    }, [pathname, router]);
    const close = useCallback((path) => {
        const next = closeTab(path);
        if (path === pathname && next)
            router.push(next);
    }, [pathname, router]);
    return useMemo(() => ({
        open,
        close,
        closeActive: () => close(pathname),
        closeAll: closeAllTabs,
        closeOthers: () => closeOtherTabs(pathname),
    }), [open, close, pathname]);
};
