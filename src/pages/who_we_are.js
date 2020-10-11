import React from "react"
import { graphql } from "gatsby"
import { Layout, Person, SEO } from "../components"
import styles from "./who_we_are.module.css"

const getPerson = (data, name) => data.find(x => x.node.name === name).node

const WhoWeAre = ({
  data,
  pageTitle = "Vilka vi är",
  people = data.allPerson.edges,
}) => (
  <Layout>
    <SEO title={pageTitle} />
    <div className={styles.who_we_are}>
      <h1>{pageTitle}</h1>
      <h2>Region Väst</h2>
      <div className={styles.displayFlex}>
        <Person person={getPerson(people, "Sofie Askenbom")} />
        <Person person={getPerson(people, "Marcus Christensen")} />
        <Person person={getPerson(people, "Martin Oom")} />
      </div>

      <h2>Region Öst</h2>
      <div className={styles.displayFlex}>
        <Person person={getPerson(people, "Erik Fremred")} />
        <Person person={getPerson(people, "Andreas Edfast")} />
        <Person person={getPerson(people, "Andreas Ingman")} />
        <Person person={getPerson(people, "Johan Karlsteen")} />
      </div>
    </div>
  </Layout>
)

export const peopleQuery = graphql`
  fragment PersonDetails_smallImage on Person {
    name
    email
    phone
    showContactInfo
    workTitles
    location
    image {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }

  query People {
    allPerson {
      edges {
        node {
          ...PersonDetails_smallImage
        }
      }
    }
  }
`
export default WhoWeAre
