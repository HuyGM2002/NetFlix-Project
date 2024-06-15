import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.wrap}>
            <h5 className={styles.title}>Copyright @ Hieu Phan </h5>
            <p className={styles.text}>phananhhieu2002@gmail.com</p>
        </div>
    )
}
export default Footer;