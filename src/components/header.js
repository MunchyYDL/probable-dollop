import React from "react"
import { Link } from "gatsby"

import styles from "./header.module.css"

export default function Header() {

    return (
        <header className={`header ${styles.header}`}>
            <Link className={styles.logo} to="/">/DEV/BRAINS</Link>
            <nav className={styles.nav}>
                <ul>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/">Hem</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/what_we_do">Vad</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/who_we_are">Vem</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/where_we_are">Var</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/contact">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    )
}