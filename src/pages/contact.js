import React from "react"
import { graphql } from "gatsby"
import { Layout, Person, SEO } from "../components"
import styles from "./contact.module.css"

const Contact = ({ data, pageTitle = "Kontakta oss!" }) => (
  <Layout>
    <SEO title={pageTitle} />
    <div className={`contact ${styles.contact}`}>
      <h1>{pageTitle}</h1>
      <p>
        Vi finns på ett flertal orter, men tar även gärna uppdrag på distans.
      </p>
      <div className={styles.addresses}>
        <div>
          <div>
            <h2>Region Väst</h2>
            <p>Göteborg</p>
          </div>
          <Person person={data.sofie} showContactInfo={true} />
        </div>
        <div>
          <div>
            <h2>Region Öst</h2>
            <p>Norrköping, Linköping & Stockholm</p>
          </div>
          <Person person={data.erik} showContactInfo={true} />
        </div>
      </div>
    </div>
  </Layout>
)

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
    erik: person(name: { eq: "Erik Fremred" }) {
      ...PersonDetails
    }
    sofie: person(name: { eq: "Sofie Askenbom" }) {
      ...PersonDetails
    }
  }
`

export default Contact
