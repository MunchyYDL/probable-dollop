import React from "react"

import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.css"

export default function Layout(props) {

    return (
        <div className={`layout ${styles.layout}`}>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}