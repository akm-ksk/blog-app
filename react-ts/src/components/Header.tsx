import {Link} from "react-router-dom";
import styles from "../styles/Header.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <Link className={styles.headerLogo} to="/">Blog</Link>
                {/*<ul className={styles.headerNavArea}>*/}
                {/*    <li>*/}
                {/*        <Link className={styles.headerNavAreaItem} to="/">Home</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link className={styles.headerNavAreaItem} to="/post/">ブログ一覧</Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </nav>
        </header>
    )
}