import React, { FunctionComponent } from "react"

import { NavBar } from "."
import styles from "./layout.module.css"

export const Layout: FunctionComponent = props => (
  <div className={styles.layout}>
    <div className={styles.container}>
      <NavBar />
      <main>{props.children}</main>
    </div>
  </div>
)
