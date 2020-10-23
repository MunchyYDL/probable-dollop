import React, { FunctionComponent } from "react"

import { Layout, SEO } from "../components"

const Error404NotFound: FunctionComponent = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <div>
      <h1>Oj då!</h1>
      <p>Sidan du söker kan inte hittas! :(</p>
    </div>
  </Layout>
)

export default Error404NotFound
