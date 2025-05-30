import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import moment from 'moment';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { SEO } from '../../components';
import './Blog.scss';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = `*[_type == "blog"] | order(publishedAt desc) {
      title,
      slug,
      author,
      excerpt,
      mainImage,
      categories,
      tags,
      publishedAt,
      readTime,
      featured,
      seo
    }`;

    client.fetch(query).then((data) => {
      setBlogs(data);
      setFilteredBlogs(data);
    });
  }, []);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilteredBlogs(blogs);
      } else {
        setFilteredBlogs(blogs.filter((blog) => blog.categories?.includes(item)));
      }
    }, 500);
  };

  const categories = ['All', 'Machine Learning', 'Software Development', 'Embedded Systems', 'Robotics', 'AI Research', 'Tutorial', 'Project Showcase'];

  return (
    <>
      <SEO 
        section="blog"
        title="Varun Vaidhiya's Tech Blog | ML, AI, Software Development & Engineering Insights"
        description="Read Varun Vaidhiya's latest blog posts on Machine Learning, Artificial Intelligence, Software Development, Embedded Systems, and Engineering insights. Stay updated with the latest in tech."
        keywords="Varun Vaidhiya blog, machine learning blog, AI articles, software development, embedded systems, engineering blog, tech insights, programming tutorials"
      />
      
      <h2 className="head-text">
        My <span>Tech Blog</span>
        <br />
        Latest Insights & Tutorials
      </h2>

      <div className="app__blog-filter">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`app__blog-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__blog-container"
      >
        <div className="app__blog-list">
          {filteredBlogs.map((blog, index) => (
            <motion.div 
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, type: "tween" }}
              className={`app__blog-item ${blog.featured ? 'featured' : ''}`} 
              key={index}
            >
              <div className="app__blog-img">
                <img src={urlFor(blog.mainImage)} alt={blog.mainImage?.alt || blog.title} />
                {blog.featured && <div className="featured-badge">Featured</div>}
              </div>

              <div className="app__blog-content">
                <div className="app__blog-meta">
                  <span className="date">{moment(blog.publishedAt).format('MMM DD, YYYY')}</span>
                  <span className="read-time">{blog.readTime} min read</span>
                </div>

                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>

                <div className="app__blog-tags">
                  {blog.categories?.slice(0, 2).map((category, idx) => (
                    <span key={idx} className="blog-tag">{category}</span>
                  ))}
                </div>

                <div className="app__blog-footer">
                  <span className="author">By {blog.author}</span>
                  <a 
                    href={`/blog/${blog.slug?.current}`} 
                    className="read-more"
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle navigation to blog post
                      console.log('Navigate to:', `/blog/${blog.slug?.current}`);
                    }}
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="no-blogs">
            <h3>No blog posts found</h3>
            <p>Check back soon for new content!</p>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Blog, 'app__blog'),
  'blog',
  'app__whitebg',
); 