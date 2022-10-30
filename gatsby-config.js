module.exports = {
  siteMetadata: {
    title: `Shivansh Bakshi Site`,
    siteUrl: `https://www.shivanshbakshi.dev`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PZDNL43",
        includeInDevelopment: false,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ]
};