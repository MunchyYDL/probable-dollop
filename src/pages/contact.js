import React from "react"

import Layout from "../components/layout"
import styles from "./contact.module.css"

export default function Contact() {

    return (
        <Layout>
            <h1>Kontakta oss!</h1>
            <div className={`contact ${styles.contact}`}>

                <div>
                    <p>Norrköping, Linköping, Stockholm &amp; distans</p>
                    <h2>Erik Fremred</h2>
                    <p>erik@devbrains.se</p>
                    <p>+46760102104</p>
                </div>

                <div>
                    <p>Göteborg &amp; distans</p>
                    <h2>Sofie Askenbom</h2>
                    <p>sofie.askenbom@devbrains.se</p>
                    <p>phone</p>
                </div>

            </div>


{/* 
Kontakta oss!
Norrköping, Linköping, Stockholm och distans
Erik Fremred kontaktuppgifter 
Göteborg och distans
Sofie Askenbom kontaktuppgifter

*/}
        </Layout>
    )
}