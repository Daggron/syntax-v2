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
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.mdx.nodes;
}