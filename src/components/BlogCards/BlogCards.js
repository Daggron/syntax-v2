import React from 'react';
import { Link } from 'gatsby'
import style from './BlogCard.module.css';
import GatsbyImage from 'gatsby-image';

export default function BlogCards({ post }) {
  return (
    <div className={style['card']}>
      <Link to={post.frontmatter.slug}>
        <div className="mb8">
          <GatsbyImage fluid={post.frontmatter.image.sharp.fluid} />
        </div>
        <div className="p16">
          <div className="title-container">
            <h2 className="mb8 pink">
              { post.frontmatter.title }
            </h2>
          </div>
          <div className="short-description">
            <p className="mb8">
              { post.excerpt.slice(0, 100) } ...
            </p>
            <p className={style['link']}>
              Read More <span className={style['linkarrow']}>&rarr;</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
