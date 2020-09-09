import React from "react"
import BackgroundImage from "gatsby-background-image"

import { NavBar } from "./"
import styles from "./layout.module.css"

export function Layout(props) {

  const wrapper = props.background
    ? (
      <BackgroundImage Tag="div" className={styles.container} fluid={props.background}>
        <NavBar />
        <main>
          {props.children}
        </main>
      </BackgroundImage>
    )
    : (
      <div className={styles.container}>
        <NavBar />
        <main>
          {props.children}
        </main>
      </div>
    )

  return (
    <div className={`layout ${styles.layout}`}>
      {wrapper}
    </div>
  )
}