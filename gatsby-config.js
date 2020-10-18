module.exports = {
  siteMetadata: {
    title: "Syntax",
    author: "Abhay Sharma",
    url: "https://syntax.io",
    twitter: "https://twitter.com/abhay_stark",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/Layout.js')
        },
        gatsbyRemarkPlugins: [
          {resolve: 'gatsby-remark-images'}
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      }
    },
  ],
}