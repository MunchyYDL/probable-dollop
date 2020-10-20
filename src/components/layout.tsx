import React from "react"

import { NavBar } from "."
import styles from "./layout.module.css"

interface LayoutProps {
  children?: any
}

export const Layout = (props: LayoutProps) => (
  <div className={styles.layout}>
    <div className={styles.container}>
      <NavBar />
      <main>{props.children}</main>
    </div>
  </div>
)
