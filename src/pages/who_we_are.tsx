import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"

import { Person } from "../data/people/Person"
import { Layout, PersonCard, SEO } from "../components"
import styles from "./who_we_are.module.css"
import { DefaultPageProps } from "./DefaultPageProps"

interface WhoWeAreProps extends DefaultPageProps {
  data: QueryData
  people: PersonNode[]
}

interface PersonNode {
  node: Person
}

interface QueryData {
  allPerson: {
    edges: PersonNode[]
  }
}

const getPerson = (data: PersonNode[], name: string) => {
  const index = data.findIndex((x: PersonNode) => x.node.name === name)
  return data[index].node
}

const WhoWeAre: FunctionComponent<WhoWeAreProps> = ({
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
        <PersonCard person={getPerson(people, "Sofie Askenbom")} />
        <PersonCard person={getPerson(people, "Marcus Christensen")} />
        <PersonCard person={getPerson(people, "Martin Oom")} />
      </div>

      <h2>Region Öst</h2>
      <div className={styles.displayFlex}>
        <PersonCard person={getPerson(people, "Erik Fremred")} />
        <PersonCard person={getPerson(people, "Andreas Edfast")} />
        <PersonCard person={getPerson(people, "Andreas Ingman")} />
        <PersonCard person={getPerson(people, "Johan Karlsteen")} />
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
