/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "DevBrains",
    titleTemplate: "%s · DevBrains",
    description: "DevBrains - Experter inom systemutveckling",
    image: "/images/DevBrains.jpg",
    siteUrl: `https://devbrains.se`,
    twitterUsername: "@DevBrains", // What to use here?
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Oswald",
            variable: true,
            weights: ["200..700"],
          },
          {
            family: "Jost",
            variable: true,
            weights: ["100..900", "100..900"],
          },
        ],
      },
    },
  ],
}
