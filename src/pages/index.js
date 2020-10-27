import React from 'react';
import BlogCards from '../components/BlogCards/BlogCards';
import Layout from '../components/Layout/Layout';
import useBlogMeta from '../hooks/useBlogsMeta';
import '../global.css';
import Heading from '../components/Heading/Heading';

export default function Index() {
  const blogs = useBlogMeta();
  return (
    <Layout>
      <Heading />
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