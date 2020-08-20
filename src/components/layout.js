import React from "react"

import NavBar from "./navbar"
import styles from "./layout.module.css"

export default function Layout(props) {

    return (
        <div className={`layout ${styles.layout}`}>
            <div className={styles.container}>
                <main>
                    {props.children}
                </main>
                <NavBar />
            </div>
        </div>
    )
}