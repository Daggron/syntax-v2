import React from 'react';
import BlogCards from '../components/BlogCards/BlogCards';
import Layout from '../components/Layout/Layout';
import useBlogMeta from '../hooks/useBlogsMeta';
import '../global.css';

export default function Index() {
  const blogs = useBlogMeta();
  return (
    <Layout>
      <div className="heading">
        <h1 className="heading-title mb16">
          Syntax
        </h1>
      </div>
      <div className="flex space-between align-center flex-wrap">
        {
          [...blogs, ...blogs, ...blogs].map(eachBlog => (
            <div className="p8" key={eachBlog.frontmatter.slug}>
              <BlogCards post={eachBlog}/>
            </div>
          ))
        }
      </div>
    </Layout>
  );
} 