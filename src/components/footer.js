import React from "react"

import styles from "./footer.module.css"

export default function Footer() {

    return (
        <footer className={`footer ${styles.footer}`}>
            {/* <h1>KONTAKT</h1>
            <p>erik@devbrains.se</p>
            <p>+46760102104</p> */}
            <p>©2020 devbrains.se</p>
        </footer>
    )
}