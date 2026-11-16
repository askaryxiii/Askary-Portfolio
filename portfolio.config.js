import {
  VscAccount,
  VscCode,
  VscBroadcast,
  VscChecklist,
  VscCloudUpload,
  VscDashboard,
  VscFiles,
  VscGithubAlt,
  VscMail,
  VscOrganization,
  VscPlug,
  VscSearch,
  VscServer,
  VscShield,
  VscSettings,
  VscTools,
} from 'react-icons/vsc';
import {
  SiApple,
  SiCss,
  SiExpo,
  SiExpress,
  SiGit,
  SiGoogleplay,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';

// Portfolio content sourced from Ahmed's FDE CV.
export const profile = {
  name: 'Ahmed Khaled Al-Askary',
  role: 'Software Engineer | Full-Stack Development | Enterprise Applications',
  currentPosition: 'Software Engineer at PROJECS LLC',
  location: 'Giza, Egypt',
  siteUrl: 'https://askary-portfolio.vercel.app/',
  repository: 'https://github.com/askaryxiii',
  metaDescription:
    'Ahmed Khaled Al-Askary is a software engineer specializing in full-stack web and mobile development and production enterprise applications.',
  ogDescription:
    'Software engineer building scalable enterprise web and mobile applications from requirements and system design through deployment.',
  keywords: [
    'Ahmed Khaled Al-Askary',
    'Ahmed Al-Askary',
    'software engineer',
    'JavaScript developer',
    'React developer',
    'Next.js developer',
    'Node.js developer',
    'full-stack developer',
    'enterprise applications',
    'systems administrator',
    'Giza Egypt',
  ],
  intro:
    'I build and deploy production enterprise web and mobile applications with React, Next.js, React Native, Node.js, and MySQL.',
  bio: [
    'Software Engineer specializing in full-stack web and mobile development, building and deploying production enterprise applications using React, Next.js, React Native, Node.js, and MySQL.',
    'I handle end-to-end software delivery from requirements gathering and system design to deployment, collaborating directly with stakeholders to translate business challenges into practical, scalable solutions backed by a strong foundation in IT infrastructure and systems administration.',
  ],
};

export const socials = [
  { id: 'email', handle: 'ahm.alaskary@gmail.com', href: 'mailto:ahm.alaskary@gmail.com' },
  { id: 'phone', handle: '+20 111 784 2693', href: 'tel:+201117842693' },
  { id: 'linkedin', handle: 'ahm-alaskary', href: 'https://linkedin.com/in/ahm-alaskary' },
  { id: 'github', handle: 'askaryxiii', href: 'https://github.com/askaryxiii' },
  { id: 'portfolio', handle: 'askary-portfolio.vercel.app', href: 'https://askary-portfolio.vercel.app/' },
];

export const getSocial = id => socials.find(social => social.id === id);

export const experience = [
  {
    role: 'Software Engineer',
    company: 'PROJECS LLC',
    period: 'Aug 2025 - Present',
    highlights: [
      'Owned the complete software lifecycle as the sole engineer for 3+ production enterprise systems, partnering directly with internal stakeholders to gather requirements, design architecture, develop, and deploy.',
      'Architected normalized MySQL databases and secure Node.js/Express.js REST APIs featuring JWT authentication, multi-role access control (RBAC), and automated business rule validation.',
      'Developed and published cross-platform mobile applications with React Native and Expo to the Apple App Store and Google Play Store for attendance, leave management, and employee self-service workflows.',
      'Managed production server deployments and improved page-load speeds by 20-35% while reducing user-reported issues by approximately 30%.',
    ],
  },
  {
    role: 'IT Engineer / System Administrator',
    company: 'FLEX P. FILMS',
    period: 'Jan 2023 - Aug 2025',
    highlights: [
      'Administered enterprise server infrastructure, local and cloud networks, user access permissions, and system security policies across organizational environments.',
      'Troubleshot systems, networking, email, VoIP, security devices, and production user issues; coordinated vendor maintenance and supported device deployment and onboarding.',
      'Collaborated across departments to streamline IT operations, onboard technical workflows, and enforce backup and security compliance standards.',
    ],
  },
];

export const education = [
  {
    qualification: 'B.S. in Computer Science',
    institution: 'Misr University for Science and Technology',
    period: 'Sep 2018 - Jul 2022',
    href: 'https://must.edu.eg/',
  },
  {
    qualification: 'Software Development Certification',
    institution: 'Ministry of Communications & IT (MCIT)',
    period: 'Apr 2024 - Nov 2024',
    href: 'https://mcit.gov.eg/',
  },
];

// Skills are presented as installed extensions in the VS Code-inspired UI.
export const extensions = [
  { id: 'javascript', name: 'JavaScript (ES6+)', publisher: 'Ecma International', category: 'Frontend & Mobile', icon: SiJavascript, color: '#f7df1e', description: 'The primary language behind my production web and mobile applications.' },
  { id: 'react', name: 'React.js', publisher: 'Meta', category: 'Frontend & Mobile', icon: SiReact, color: '#61dafb', description: 'Modular interfaces for enterprise workflows and SaaS products.' },
  { id: 'nextjs', name: 'Next.js', publisher: 'Vercel', category: 'Frontend & Mobile', icon: SiNextdotjs, color: '#ffffff', description: 'Server-rendered, high-performance applications with strong technical SEO.' },
  { id: 'react-native', name: 'React Native (Expo)', publisher: 'Meta & Expo', category: 'Frontend & Mobile', icon: SiExpo, color: '#61dafb', description: 'Cross-platform mobile applications published to the Apple App Store and Google Play.' },
  { id: 'redux-toolkit', name: 'Redux Toolkit', publisher: 'Redux', category: 'Frontend & Mobile', icon: SiRedux, color: '#764abc', description: 'Predictable state management for complex application workflows.' },
  { id: 'tailwind-css', name: 'Tailwind CSS', publisher: 'Tailwind Labs', category: 'Frontend & Mobile', icon: SiTailwindcss, color: '#06b6d4', description: 'Utility-first styling for fast, consistent interface delivery.' },
  { id: 'html5', name: 'HTML5', publisher: 'WHATWG', category: 'Frontend & Mobile', icon: SiHtml5, color: '#e34f26', description: 'Semantic structure for modern web applications.' },
  { id: 'css3', name: 'CSS3', publisher: 'W3C', category: 'Frontend & Mobile', icon: SiCss, color: '#663399', description: 'Responsive and maintainable application styling.' },

  { id: 'nodejs', name: 'Node.js', publisher: 'OpenJS Foundation', category: 'Backend & Databases', icon: SiNodedotjs, color: '#5fa04e', description: 'Server-side application logic and production API development.' },
  { id: 'express', name: 'Express.js', publisher: 'OpenJS Foundation', category: 'Backend & Databases', icon: SiExpress, color: '#ffffff', description: 'Secure REST APIs with validation and authorization.' },
  { id: 'rest-apis', name: 'RESTful APIs', publisher: 'Web Architecture', category: 'Backend & Databases', icon: VscPlug, color: '#4ec9b0', description: 'Well-structured APIs connecting enterprise web and mobile clients.' },
  { id: 'mysql', name: 'MySQL', publisher: 'Oracle', category: 'Backend & Databases', icon: SiMysql, color: '#4479a1', description: 'Production relational databases and database-driven business rules.' },
  { id: 'schema-design', name: 'Relational Schema Design', publisher: 'Database Architecture', category: 'Backend & Databases', icon: VscServer, color: '#569cd6', description: 'Normalized schemas designed around business requirements and approval workflows.' },
  { id: 'jwt', name: 'JWT Authentication', publisher: 'IETF', category: 'Backend & Databases', icon: SiJsonwebtokens, color: '#d63aff', description: 'Secure token-based authentication for web and mobile services.' },
  { id: 'rbac', name: 'Role-Based Access Control (RBAC)', publisher: 'Security Architecture', category: 'Backend & Databases', icon: VscShield, color: '#ce9178', description: 'Multi-role permissions and authorization across enterprise systems.' },

  { id: 'production-deployment', name: 'Production App Deployment', publisher: 'Application Delivery', category: 'Deployment & Infrastructure', icon: VscCloudUpload, color: '#4ec9b0', description: 'Production releases spanning applications, APIs, databases, and servers.' },
  { id: 'app-store', name: 'Apple App Store Publishing', publisher: 'Apple', category: 'Deployment & Infrastructure', icon: SiApple, color: '#ffffff', description: 'Preparing and publishing production iOS applications.' },
  { id: 'google-play', name: 'Google Play Publishing', publisher: 'Google', category: 'Deployment & Infrastructure', icon: SiGoogleplay, color: '#3ddc84', description: 'Preparing and publishing production Android applications.' },
  { id: 'server-admin', name: 'Linux/Windows Server Administration', publisher: 'Infrastructure Operations', category: 'Deployment & Infrastructure', icon: SiLinux, color: '#fcc624', description: 'Enterprise server administration, availability, access, and operational support.' },
  { id: 'network-security', name: 'Networking & Security', publisher: 'Infrastructure Operations', category: 'Deployment & Infrastructure', icon: VscBroadcast, color: '#569cd6', description: 'Local and cloud networks, permissions, backups, and security policies.' },
  { id: 'git', name: 'Git', publisher: 'Software Freedom Conservancy', category: 'Deployment & Infrastructure', icon: SiGit, color: '#f05032', description: 'Version control for reliable, collaborative delivery.' },
  { id: 'github', name: 'GitHub', publisher: 'GitHub', category: 'Deployment & Infrastructure', icon: SiGithub, color: '#ffffff', description: 'Source hosting, collaboration, and release workflows.' },

  { id: 'sdlc', name: 'End-to-End SDLC Ownership', publisher: 'Solutions Delivery', category: 'Solutions & Delivery', icon: VscChecklist, color: '#dcdcaa', description: 'Owning requirements, architecture, development, deployment, and maintenance.' },
  { id: 'requirements', name: 'Stakeholder Requirement Gathering', publisher: 'Solutions Delivery', category: 'Solutions & Delivery', icon: VscOrganization, color: '#c586c0', description: 'Partnering directly with business stakeholders to define effective solutions.' },
  { id: 'workflow-automation', name: 'Workflow Automation', publisher: 'Solutions Delivery', category: 'Solutions & Delivery', icon: VscTools, color: '#4ec9b0', description: 'Replacing manual processes with rules-driven enterprise workflows.' },
  { id: 'agile', name: 'Agile Delivery', publisher: 'Solutions Delivery', category: 'Solutions & Delivery', icon: VscDashboard, color: '#dcdcaa', description: 'Iterative planning and delivery across changing business needs.' },
  { id: 'performance-seo', name: 'Web Performance & SEO Optimization', publisher: 'Web Platform', category: 'Solutions & Delivery', icon: VscSearch, color: '#c586c0', description: 'Fast, discoverable applications measured through production results.' },
];

export const getExtension = id => extensions.find(extension => extension.id === id);

export const skills = extensions.reduce((groups, { category, name }) => {
  (groups[category] ??= []).push(name);
  return groups;
}, {});

export const projects = [
  {
    title: 'Enterprise Time Sheet & HR Workflow Platform',
    description: 'Production enterprise web and mobile platform supporting GPS-validated photo attendance, leave requests, attendance corrections, expense approvals, RBAC, database-driven approval hierarchies, and real-time in-app notifications. Built with React.js, React Native, Expo, Node.js, Express.js, MySQL, and JWT.',
    logo: '/logos/react_icon.svg',
    link: 'https://projecs.com/',
    slug: 'enterprise-time-sheet-hr-platform',
  },
  {
    title: 'Cafeteria & Operations Management System',
    description: 'Production multi-role web application that replaced paper-based ordering and billing workflows for five organizational user roles, with rule-based scheduling windows, audit trails, order history, and automated cost calculations. Built with React.js, Node.js, Express.js, MySQL, and JWT.',
    logo: '/logos/react_icon.svg',
    slug: 'cafeteria-operations-management-system',
  },
  {
    title: 'Corporate Web Platform Redesign',
    description: 'Production Next.js application that raised the Google Lighthouse performance score from 49 to 98 through server-side rendering, code splitting, asset optimization, and technical SEO improvements. Built with Next.js, JavaScript, and Tailwind CSS.',
    logo: '/logos/js_icon.svg',
    link: 'https://projecs.com/',
    slug: 'corporate-web-platform-redesign',
  },
];

export const routes = [
  { path: '/', label: 'Home', icon: VscFiles, activityBar: 'top', shortcut: 'h', file: { name: 'home.jsx', icon: '/logos/react_icon.svg' } },
  { path: '/about', label: 'About', icon: VscAccount, activityBar: 'bottom', shortcut: 'a', file: { name: 'about.html', icon: '/logos/html_icon.svg' } },
  { path: '/contact', label: 'Contact', icon: VscMail, activityBar: 'top', shortcut: 'c', file: { name: 'contact.css', icon: '/logos/css_icon.svg' } },
  { path: '/projects', label: 'Projects', icon: VscCode, activityBar: 'top', shortcut: 'p', file: { name: 'projects.js', icon: '/logos/js_icon.svg' } },
  { path: '/github', label: 'GitHub', icon: VscGithubAlt, activityBar: 'top', shortcut: 'g', file: { name: 'github.md', icon: '/logos/markdown_icon.svg' } },
  { path: '/settings', label: 'Settings', icon: VscSettings, activityBar: 'bottom', shortcut: 's' },
];

export const fileRoutes = routes.filter(route => route.file !== undefined);
