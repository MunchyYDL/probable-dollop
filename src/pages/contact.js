import React from "react"
import { graphql } from "gatsby"

import { Person, Layout } from "../components"

import styles from "./contact.module.css"

export default function Contact({data}){
    return (

        <Layout>
            <div className={`contact ${styles.contact}`}>
                <h1>Kontakta oss!</h1>
                <p>Vi finns på plats på dessa orter, men tar även gärna uppdrag på distans.</p>
                <div className={styles.addresses}>

                    <div>
                        <h2>Göteborg</h2>
                        <Person person={data.sofie} />
                    </div>

                    <div>
                        <h2>Norrköping, Linköping, Stockholm</h2>
                        <Person person={data.erik} />
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export const personQuery = graphql`
fragment PersonDetails on Person {
  name
  email
  phone
  showContactInfo
  location
  image {
    childImageSharp {
      fixed(width: 200) {
          ...GatsbyImageSharpFixed
      }
    }
  }
}
  
{
  erik: person(name: {eq: "Erik Fremred"}) {
    ...PersonDetails
  }
  sofie: person(name: {eq: "Sofie Askenbom"}) {
    ...PersonDetails
  }
}`;
