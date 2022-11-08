import {Link} from "react-router-dom";
import styles from "../styles/Footer.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <Link className={styles.footerLogo} to="/">Blog</Link>
            </div>
        </footer>
    )
}