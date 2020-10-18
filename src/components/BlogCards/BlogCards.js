import React from 'react';
import { Link } from 'gatsby'
import style from './BlogCard.module.css';

export default function BlogCards({ post }) {
  return (
    <div className={style['card']}>
      <Link to={post.frontmatter.slug}>
        <div className="title-container">
          <h2 className="mb8">
            { post.frontmatter.title }
          </h2>
        </div>
        <div className="short-description">
          <p className="mb8">
            { post.excerpt.slice(0, 100) } ...
          </p>
        </div>
      </Link>
    </div>
  )
}
