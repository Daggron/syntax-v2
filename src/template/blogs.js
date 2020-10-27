import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../components/Heading/Heading';
import Layout from '../components/Layout/Layout';

export const data = graphql`
  query ($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        author
        slug
        image {
          sharp: childImageSharp {
            fluid (maxWidth: 500, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
      excerpt
    }
  }
`

export default function blogs({ data: {mdx: post} }) {
  return (
    <Layout>

      <Helmet>
        <title>
          Syntax | { post.frontmatter.title }
        </title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" url={`https://syntax.dev/${post.frontmatter.slug}`}/>
      </Helmet>
      <div className="mb16">
        <Heading />
      </div>
      <div>
        <h1 className="mb8">
          { post.frontmatter.title }
        </h1>
        <MDXRenderer>
          { post.body }
        </MDXRenderer>
      </div>
    </Layout>
  )
}
