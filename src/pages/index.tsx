import React from "react"

import { Layout, SEO } from "../components"
import Head from "../svg/head.inline.svg"
import styles from "./index.module.css"
import { DefaultPageProps } from "./DefaultPageProps"

interface Props extends DefaultPageProps {}

const Index = ({ pageTitle = "Hem" }: Props) => (
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
