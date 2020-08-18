import React from "react"

import Footer from "./footer"
import styles from "./layout.module.css"

export default function Layout(props) {

    return (
        <div className={`layout ${styles.layout}`}>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}