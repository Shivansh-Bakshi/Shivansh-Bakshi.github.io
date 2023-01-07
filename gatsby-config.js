module.exports = {
  siteMetadata: {
    title: `Shivansh Bakshi Site`,
    siteUrl: `https://www.shivanshbakshi.dev`
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-layout",
    //   options: {
    //     component: require.resolve('./src/components/layout')
    //   }
    // },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PZDNL43",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon-512x512.png`,
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ]
};