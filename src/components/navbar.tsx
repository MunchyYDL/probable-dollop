import React, { FunctionComponent } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./navbar.module.css"

interface LinkProps {
  to: string
  title: string
}

const Link: FunctionComponent<LinkProps> = props => (
  <AniLink
    fade
    className={styles.link}
    activeClassName={styles.activeLink}
    to={props.to}
  >
    {props.title}
  </AniLink>
)

const links = [
  { to: "/", title: "Hem" },
  { to: "/what_we_do", title: "Vad vi gör" },
  { to: "/who_we_are", title: "Vilka vi är" },
  { to: "/where_we_are", title: "Var vi finns" },
  { to: "/contact", title: "Kontakta oss!" },
]

export const NavBar: FunctionComponent = () => (
  <nav className={styles.nav}>
    <div className={styles.menuToggle}>
      <input className={styles.input} type="checkbox" />
      <span className={styles.span} />
      <span className={styles.span} />
      <span className={styles.span} />
      <ul className={styles.menu}>
        {links.map(link => (
          <li key={link.to}>
            <Link to={link.to} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  </nav>
)
