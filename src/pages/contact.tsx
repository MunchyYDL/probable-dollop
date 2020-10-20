import React from "react"
import { graphql } from "gatsby"

import { Layout, PersonCard, SEO } from "../components"
import styles from "./contact.module.css"

interface PageProps {
  data?: any
  pageTitle: string
}

const Contact = ({ data, pageTitle = "Kontakta oss!" }: PageProps) => (
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
          <PersonCard person={data.sofie} showContactInfo={true} />
        </div>
        <div>
          <div>
            <h2>Region Öst</h2>
            <p>Norrköping, Linköping & Stockholm</p>
          </div>
          <PersonCard person={data.erik} showContactInfo={true} />
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
