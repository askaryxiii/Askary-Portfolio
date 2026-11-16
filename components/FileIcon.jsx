import Image from 'next/image';
// Routes backed by a file show its language icon; others (like Settings) fall
// back to their activity bar icon
const FileIcon = ({ route, size = 18 }) => {
    if (route.file) {
        return (<Image src={route.file.icon} alt="" height={size} width={size}/>);
    }
    const Icon = route.icon;
    return <Icon size={size - 2} aria-hidden/>;
};
export const getTabTitle = (route) => route.file?.name ?? route.label;
export default FileIcon;
