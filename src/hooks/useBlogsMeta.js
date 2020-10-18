import { graphql, useStaticQuery } from 'gatsby';

export default function useBlogMeta() {
  const data = useStaticQuery(graphql`
    query {
      mdx: allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `);

  return data.mdx.nodes;
}