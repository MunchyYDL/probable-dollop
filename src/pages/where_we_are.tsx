import React, { FunctionComponent } from "react"

import { Layout, SEO } from "../components"
import Map from "../svg/map.inline.svg"
import styles from "./where_we_are.module.css"
import { DefaultPageProps } from "./DefaultPageProps"

const WhereWeAre: FunctionComponent<DefaultPageProps> = ({
  pageTitle = "Var vi finns",
}) => (
  <Layout>
    <SEO title={pageTitle} />
    <div className={styles.where_we_are}>
      <div className={styles.text}>
        <h1>{pageTitle}</h1>
        <p>
          Vi finns på plats i Norrköping, Linköping, Stockholm & Göteborg men är
          självklart flexibla för uppdrag på annan ort alternativt distans.
        </p>
      </div>
      <Map />
    </div>
  </Layout>
)

export default WhereWeAre
