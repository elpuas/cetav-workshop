module.exports = {
  // Modifica la Metadata con tu contenido.
  // veamos la metadat en http://localhost:8000/___graphql.
  siteMetadata: {
    title: `Taller del Cetav`,
    description: `Este taller es cortesia de Gatsby Costa Rica.`,
    author: `@3lpu4s`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
    	resolve: `gatsby-source-wordpress`,
    	options: {
    		// Your WordPress source.
    		baseUrl: `demo.wp-api.org`,
    		protocol: `https`,
    		// Only fetches posts, tags and categories from the baseUrl.
    		includedRoutes: ['**/posts', '**/tags', '**/categories'],
    		// Not using ACF so putting it off.
    		useACF: false
    	}
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
