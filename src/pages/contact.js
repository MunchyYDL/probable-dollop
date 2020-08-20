import React from "react"

import Layout from "../components/layout"
import styles from "./contact.module.css"

import Erik from "../images/jpg/ErikFremred.jpg"
import Sofie from "../images/jpg/SofieAskenbom.jpg"

export default function Contact() {

    return (
        <Layout>
            <div className={`contact ${styles.contact}`}>
                <h1>Kontakta oss!</h1>
                <p>Vi finns på plats på dessa orter, men tar även gärna uppdrag på distans.</p>
                <div className={styles.addresses}>

                    <div>
                        <h2>Norrköping, Linköping, Stockholm</h2>
                        <img src={Erik} alt="Erik Fremred"/>
                        <h3>Erik Fremred</h3>
                        <p>
                            +46 76 010 21 04<br/>
                            erik.fremred@devbrains.se
                        </p>
                    </div>

                    <div>
                        <h2>Göteborg</h2>
                        <img src={Sofie} alt="Sofie Askenbom"/>
                        <h3>Sofie Askenbom</h3>
                        <p>
                            +46 70 874 20 71<br/>
                            sofie.askenbom@devbrains.se
                        </p>
                    </div>

                </div>
            </div>
        </Layout>
    )
}