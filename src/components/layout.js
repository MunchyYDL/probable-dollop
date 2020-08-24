import React from "react"

import { NavBar } from "./"
import styles from "./layout.module.css"

export function Layout(props) {

    return (
        <div className={`layout ${styles.layout}`}>
            <div className={styles.container}>
                <NavBar />
                <main>
                    {props.children}
                </main>
            </div>
        </div>
    )
}