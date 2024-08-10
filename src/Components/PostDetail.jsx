import React, { useEffect, useState } from 'react';
import axios from 'axios';
import he from 'he';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id: postId } = useParams();

  useEffect(() => {
    const apiUrl = `https://techcrunch.com/wp-json/wp/v2/posts/${postId}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const decodedData = {
          ...response.data,
          title: {
            rendered: he.decode(response.data.title.rendered),
          },
          content: {
            rendered: he.decode(response.data.content.rendered),
          },
        };
        setPost(decodedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch post data.');
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title.rendered} - Techsevvy</title>
        <meta name="description" content={post.yoast_head_json.description} />
        <meta property="og:title" content={post.yoast_head_json.og_title} />
        <meta property="og:description" content={post.yoast_head_json.og_description} />
        <meta property="og:image" content={post.yoast_head_json.og_image[0].url} />
        <meta property="og:url" content={`https://techcrunch.com/${postId}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.yoast_head_json.twitter_title} />
        <meta name="twitter:description" content={post.yoast_head_json.twitter_description} />
        <meta name="twitter:image" content="https://x.com/tech_sevvy/photo" /> 
      </Helmet>
      <Hero 
        logo="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/651dbf514dd0092be734edf6_Group%201171276596.svg"
        heading="Techsevvy Blog"
      />
      <div className="post-detail" style={{ padding: '40px' }}>
        <h3>{post.title.rendered}</h3>
        <div className="blog-img" style={{ margin: '0 auto' }}>
          <img
            src={post.yoast_head_json.og_image[0].url}
            alt={post.yoast_head_json.description}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </>
  );
};

export default PostDetail;
