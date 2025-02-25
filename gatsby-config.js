const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: "My-Anh & Khoa",
    author: "Khoa Nguyen",
    description: "My-Anh and Khoa's Wedding website."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/heart.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.thenewlenguyens.com",
      },
    },
    `react-faq-component`,
  ],
}
