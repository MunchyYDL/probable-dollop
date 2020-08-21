import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import styles from "./contact.module.css"

export const query = graphql`
    query {
        erik: file(relativePath: {eq: "people/ErikFremred.jpg"}) {
          childImageSharp {
            fixed(width: 100) {
                ...GatsbyImageSharpFixed
            }
          }
        }
      
        sofie: file(relativePath: {eq: "people/SofieAskenbom.jpg"}) {
          childImageSharp {
            fixed(width: 100) {
                ...GatsbyImageSharpFixed
            }
          }
        }
      }`;

export default function Test({data}){
    return (

        <Layout>
            <div className={`contact ${styles.contact}`}>
                <h1>Kontakta oss!</h1>
                <p>Vi finns på plats på dessa orter, men tar även gärna uppdrag på distans.</p>
                <div className={styles.addresses}>

                    <div>
                        <h2>Norrköping, Linköping, Stockholm</h2>
                        <Img fixed={data.erik.childImageSharp.fixed} alt="Erik Fremred" />
                        <h3>Erik Fremred</h3>
                        <p>
                            +46 76 010 21 04<br/>
                            erik.fremred@devbrains.se
                        </p>
                    </div>

                    <div>
                        <h2>Göteborg</h2>
                        <Img fixed={data.sofie.childImageSharp.fixed} alt="Sofie Askenbom" />
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