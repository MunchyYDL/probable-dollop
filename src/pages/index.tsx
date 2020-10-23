import React, { FunctionComponent } from "react"

import { Layout, SEO } from "../components"
import Head from "../svg/head.inline.svg"
import styles from "./index.module.css"
import { DefaultPageProps } from "./DefaultPageProps"

const Index: FunctionComponent<DefaultPageProps> = ({ pageTitle = "Hem" }) => (
  <Layout>
    <SEO title={pageTitle} />
    <div className={`index ${styles.index}`}>
      <div>
        <Head />
        <h1>/DEV/BRAINS</h1>
        <h2>Experter inom systemutveckling</h2>
      </div>
    </div>
  </Layout>
)

export default Index
