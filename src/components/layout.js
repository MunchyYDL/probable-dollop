import React from "react"

import { NavBar } from "./"
import styles from "./layout.module.css"

export function Layout(props) {

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