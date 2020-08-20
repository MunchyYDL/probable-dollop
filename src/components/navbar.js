import React from "react"
import { Link } from "gatsby"

import styles from "./navbar.module.css"

export default function NavBar() {

    return (
        // <footer className={`navbar ${styles.navbar}`}>
            <nav className={styles.nav}>
                <ul>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/">Hem</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/what_we_do">Vad vi gör</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/who_we_are">Vilka vi är</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/where_we_are">Var vi finns</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/contact">Kontakta oss!</Link></li>
                </ul>
            </nav>
        // </footer>
    )
}