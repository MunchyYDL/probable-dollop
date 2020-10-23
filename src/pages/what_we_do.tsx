import React, { FunctionComponent } from "react"

import { Layout, SEO } from "../components"
import { DefaultPageProps } from "./DefaultPageProps"

const WhatWeDo: FunctionComponent<DefaultPageProps> = ({
  pageTitle = "Vad vi gör",
}) => (
  <Layout>
    <SEO title={pageTitle} />
    <div>
      <h1>{pageTitle}</h1>
      <p>
        Vi är ett gäng ödmjuka specialister inom systemutveckling (och en
        projektledare) som gärna vill dela med oss av våra kunskaper och
        erfarenheter genom att erbjuda konsulttjänster eller kompletta
        projektleveranser.
      </p>
      <p>
        Våra breda och djupa kunskaper samt långa erfarenhet är definitivt en
        fördel för att få en enkel, snabb och effektiv uppstart. För handen på
        hjärtat - visst är det riktigt skönt när ”det bara funkar”.
      </p>
      <p>
        Effektivitet och produktivitet är såklart mycket viktigt men vi vet
        också att förmågan att kunna förmedla våra kunskaper samt stötta och
        coacha våra kollegor i teamet är avgörande för att få en kvalitativ
        leverans. Det skapar även förutsättningar för en öppen och varm
        lagkänsla och kunskapsutveckling i teamet, något som vi tror bidrar till
        ett bättre resultat.
      </p>
    </div>
  </Layout>
)

export default WhatWeDo
