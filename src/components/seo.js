import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

export const SEO = ({ title, description, image }) => {
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

  // Construct object with defaults or overrides
  const seo = {
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
      <meta property="og:image:width" content={seo.image.width} />
      <meta property="og:image:height" content={seo.image.height} />

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

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
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
