import React from "react"

import Layout from "../components/layout"
import styles from "./contact.module.css"

export default function Contact() {

    return (
        <Layout>
            <div className={`contact ${styles.contact}`}>
                <h1>Kontakta oss!</h1>
                <div className={styles.addresses}>

                    <div>
                        <h2>Norrköping, Linköping, Stockholm &amp; distans</h2>
                        <h3>Erik Fremred</h3>
                        <p>+46 76 010 21 04</p>
                        <p>erik.fremred@devbrains.se</p>
                    </div>

                    <div>
                        <h2>Göteborg &amp; distans</h2>
                        <h3>Sofie Askenbom</h3>
                        <p>+46 70 874 20 71</p>
                        <p>sofie.askenbom@devbrains.se</p>
                    </div>

                </div>
            </div>
        </Layout>
    )
}