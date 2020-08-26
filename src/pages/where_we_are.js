import React from "react"
import { graphql } from "gatsby"

import { Layout }  from "../components"

export default function WhereWeAre( {data} ) {

    // const background = data.background.childImageSharp.fluid ?? null;

    return (
        <Layout>
            <div>
                <h1>Var vi finns</h1>
                <p><i>
                    Svartvit snygg kartbild över södra Sverige där vi markera ut de områden vi
                    befinner oss i. Visst hade du en idé här @Marcus?
                </i></p>

                <p>
                    Vi finns på plats i Norrköping, Linköping, Stockholm &amp; Göteborg
                    men är självklart flexibla för uppdrag på annan ort alternativt distans.
                </p>
            </div>
        </Layout>
    )
}

export const query = graphql`
{
    background: file(relativePath: {eq: "back.jpg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;