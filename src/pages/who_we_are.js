import React from "react"
import { graphql } from "gatsby"

import { Layout, Person }  from "../components"

function getPerson(data, name) {
    return data.find(x => x.node.name === name).node;
}

export default function WhoWeAre({data}) {

    const people = data.allPerson.edges;

    return (
        <Layout>
            <div>
                <h1>Vilka vi är</h1>
                <h2>Region Väst (Göteborg)</h2>
                <div className="displayFlex">
                    <Person person={getPerson(people, "Sofie Askenbom")}/>
                    <Person person={getPerson(people, "Marcus Christensen")}/>
                    <Person person={getPerson(people, "Martin Oom")}/>
                </div>

                <h2>Region Öst (Norrköping, Linköping, Stockholm)</h2>
                <div className="displayFlex">
                    <Person person={getPerson(people, "Erik Fremred")}/>
                    <Person person={getPerson(people, "Andreas Edfast")}/>
                    <Person person={getPerson(people, "Andreas Ingman")}/>
                    <Person person={getPerson(people, "Johan Karlsteen")}/>
                </div>

                {/* <p>
                    Här har vi svartvita bilder på samtliga utvecklare + projektledare grupperat efter ort.
                    Det ska finnas en personlig text och tekniska kunskaper under varje bild.
                    Och under mig och Erik ska det finnas kontaktinformation, mail och telefon.
                </p> */}
                {/* <p>
                    Längst ned i detta avsnitt ska det finnas en rubrik som länkar till ett enkelt formulär
                    där man skriver sina kontaktuppgifter, laddar upp sitt cv (pdf, word) samt en ruta for meddelanden.
                    Formuläret får gärna skickas till både min och Eriks mail.
                </p> */}

                <h1>Vill du vara med?</h1>
            </div>
        </Layout>
    )
}

export const personQuery = graphql`
fragment PersonDetails_smallImage on Person {
    name
    email
    phone
    showContactInfo
    location
    image {
      childImageSharp {
        fixed(width: 100) {
            ...GatsbyImageSharpFixed
        }
      }
    }
  }
  
  {
    allPerson {
      edges {
        node {
          ...PersonDetails_smallImage
        }
      }
    }
  }`;