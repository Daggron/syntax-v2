import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/Layout';

import style from './blogs.module.css';

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
      <div>
        <h1>
          { post.frontmatter.title }
        </h1>
        <div className={style['img']}>
          <GatsbyImage fluid={post.frontmatter.image.sharp.fluid} className={style['img']} />
        </div>
      </div>
    </Layout>
  )
}
