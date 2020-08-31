import React from "react"
import { graphql } from "gatsby"

import { Layout, Person } from "../components"

import styles from "./contact.module.css"

export default function Contact({ data }) {
  return (

    <Layout>
      <div className={`contact ${styles.contact}`}>
        <h1>Kontakta oss!</h1>
        <p>Vi finns på ett flertal orter, men tar även gärna uppdrag på distans.</p>
        <div className={styles.addresses}>

          <div>
            <div>
              <h2>Region Väst</h2>
              <h4>Göteborg</h4>
            </div>
            <Person person={data.sofie} showContactInfo={true} />
          </div>
          <div>
            <div>
              <h2>Region Öst</h2>
              <h4>Norrköping, Linköping & Stockholm</h4>
            </div>
            <Person person={data.erik} showContactInfo={true} />
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
      fixed(width: 150) {
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
