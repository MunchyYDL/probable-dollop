import React from "react"
import { graphql } from "gatsby"

import { Layout, Person } from "../components"

import styles from "./contact.module.css"

export default function Contact({data}){
    return (

        <Layout>
            <div className={`contact ${styles.contact}`}>
                <h1>Kontakta oss!</h1>
                <p>Vi finns på plats på dessa orter, men tar även gärna uppdrag på distans.</p>
                <div className={styles.addresses}>

                    <div>
                        <h2>Region Väst - Göteborg</h2>
                        <Person person={data.sofie} showContactInfo={true} />
                    </div>

                    <div>
                        <h2>Region Öst - Norrköping, Linköping &amp; Stockholm</h2>
                        <Person person={data.erik} showContactInfo={true}/>
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
  workTitle
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
