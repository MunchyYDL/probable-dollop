/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Oswald',
            variable: true,
            weights: ['200..700']
          },
          {
            family: 'Jost',
            variable: true,
            weights: ['100..900', '100..900']
          },
        ]
      }
    },        
  ],
}
