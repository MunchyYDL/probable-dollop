import React from "react"

import { Layout, SEO } from "../components"

export default function Error404() {
  return (
    <Layout>
      <SEO title="404" />
      <div>
        <h1>Oj då!</h1>
        <p>Sidan du söker kan inte hittas! :(</p>
      </div>
    </Layout>
  )
}