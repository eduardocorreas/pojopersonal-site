module.exports = {
  siteMetadata: {
    title: `Pedro Pojo Personal`,
    description: `Pedro Pojo, personal trainer especialista em emagrecimento consciente. Atua com consultoria online e presencial.`,
    author: `Flatcode Social Media`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pojo-personal`,
        short_name: `Pojo Personal`,
        start_url: `/`,
        background_color: `#749E92`,
        theme_color: `#749E92`,
        display: `minimal_ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-160182835-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'pojopersonal.com',
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '348363412718037',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://pojopersonal.us19.list-manage.com/subscribe/post?u=31636fa43c0248e85123e0d93&amp;id=51f8f5b8c7', // add your MC list endpoint here; see instructions below
      },
    },
  ],
}
