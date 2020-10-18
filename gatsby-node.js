exports.createPages = async ({ actions, graphql, reporter }) => {
  const data = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const posts = data.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/template/blogs.js'),
      context: {
        slug: post.frontmatter.slug
      },
    })
  })
}