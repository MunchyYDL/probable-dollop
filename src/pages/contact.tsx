import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"

import { Person } from "../data/people/Person"
import { Layout, PersonCard, SEO } from "../components"
import styles from "./contact.module.css"
import { DefaultPageProps } from "./DefaultPageProps"

interface ContactProps extends DefaultPageProps {
  data: {
    erik: Person
    sofie: Person
  }
}

const Contact: FunctionComponent<ContactProps> = ({
  data,
  pageTitle = "Kontakta oss!",
}) => (
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
