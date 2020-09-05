import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import styles from "./navbar.module.css"

export function NavBar() {

  return (
    <nav className={styles.nav}>
      <div className={styles.menuToggle}>
        <input className={styles.input} type="checkbox" />
        <span className={styles.span} />
        <span className={styles.span} />
        <span className={styles.span} />
          <ul className={styles.menu}>
            <li><AniLink fade className={styles.link} activeClassName={styles.activeLink} to="/">Hem</AniLink></li>
            <li><AniLink fade className={styles.link} activeClassName={styles.activeLink} to="/what_we_do">Vad vi gör</AniLink></li>
            <li><AniLink fade className={styles.link} activeClassName={styles.activeLink} to="/who_we_are">Vilka vi är</AniLink></li>
            <li><AniLink fade className={styles.link} activeClassName={styles.activeLink} to="/where_we_are">Var vi finns</AniLink></li>
            <li><AniLink fade className={styles.link} activeClassName={styles.activeLink} to="/contact">Kontakta oss!</AniLink></li>
          </ul>
      </div>
    </nav>
  )
}