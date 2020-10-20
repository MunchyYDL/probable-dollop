import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title: string
  description?: string
  image?: string
}

export const SEO = ({ title, description, image }: SEOProps) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  interface SEOData {
    title: string
    description: string
    image: {
      url: string
      alt: string
      width: number
      height: number
    }
    url: string
    twitterHandle: string
  }

  // Construct object with defaults or overrides
  const seo: SEOData = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: {
      url: `${siteUrl}${image || defaultImage}`,
      alt: "DevBrains",
      width: 1280,
      height: 720,
    },
    url: `${siteUrl}${pathname}`,
    twitterHandle: twitterUsername,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: "sv",
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image.url} />

      {/* Facebook Open Graph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="DevBrains" />
      <meta property="og:image" content={seo.image.url} />
      <meta property="og:image.alt" content={seo.image.alt} />
      <meta property="og:image:width" content={seo.image.width.toString()} />
      <meta property="og:image:height" content={seo.image.height.toString()} />

      {/* Twitter card tags additive with the og: tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="devbrains.se" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterHandle} />
      <meta name="twitter:image" content={seo.image.url} />
      <meta name="twitter:image:alt" content={seo.image.alt} />
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`
