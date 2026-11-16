import styles from '@/styles/ExtensionIcon.module.css';
const ExtensionIcon = ({ extension, size }) => {
    const Icon = extension.icon;
    return (<span className={styles.tile} style={{ width: size, height: size }} aria-hidden>
      <Icon size={size * 0.6} color={extension.color}/>
    </span>);
};
export default ExtensionIcon;
