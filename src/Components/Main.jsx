import React, { useEffect, useState } from 'react';
import axios from 'axios';
import he from 'he';
import { Link } from 'react-router-dom';
import Subscribe from './Subscribe';
import Hero from './Hero';
import { Helmet } from 'react-helmet-async';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 15; // Number of posts to display per page

  useEffect(() => {
    const storedData = sessionStorage.getItem("posts");
    const storedCategory = sessionStorage.getItem("selectedCategory");

    if (storedData && (!selectedCategory || selectedCategory === storedCategory)) {
      setPosts(JSON.parse(storedData));
      setLoading(false);
    } else {
      let apiUrl = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=100';

      if (selectedCategory) {
        apiUrl += `&categories=${selectedCategory}`;
      }

      axios
        .get(apiUrl)
        .then((response) => {
          const decodedData = response.data.map((item) => ({
            ...item,
            title: {
              rendered: he.decode(item.title.rendered),
            },
            content: {
              rendered: he.decode(item.content.rendered),
            },
            excerpt: {
              rendered: he.decode(item.excerpt.rendered),
            },
          }));
          setPosts(decodedData);
          sessionStorage.setItem("posts", JSON.stringify(decodedData));
          if (selectedCategory) {
            sessionStorage.setItem("selectedCategory", selectedCategory);
          }
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); // Set loading to false on error as well
        });
    }
  }, [selectedCategory]);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, posts.length);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    if (totalPages === 0) return null; // No need to render pagination if no posts

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`resources-pagination-page-number w-inline-block ${
            currentPage === i ? 'w--current' : ''
          }`}
          style={{ cursor: 'pointer' }}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  const dataElements = posts.slice(startIndex, endIndex).map((item, index) => (
    <div
      role="listitem"
      className="resources-collection-item w-dyn-item"
      key={index}
    >
      <div className="resources-card">
        <div className="resource-card-top">
          <div className="resources-card-text-contain">
            <div className="resources-card-tag-wrap">
              <div className="resources-card-tag type">
                <div className="paragraph-16px resources-tag-text tag-small">
                  Blog
                </div>
              </div>
              <div className="resources-card-tag category">
                <div
                  className="paragraph-16px resources-tag-text tag-small"
                  dangerouslySetInnerHTML={{
                    __html:
                      item.yoast_head_json.schema['@graph'][0]['articleSection'][0],
                  }}
                />
              </div>
            </div>
            <div className="blog-img">
              <img
                src={item.yoast_head_json.og_image[0].url}
                alt={item.yoast_head_json.description}
              />
            </div>
            <h3 className="heading-40px resource-card-title title-small">
              {item.title.rendered}
            </h3>
          </div>
        </div>
        <div className="resource-card-bottom">
          <div className="resources-card-author-wrap">
            <div className="paragraph-18px resources-card-author-text">by</div>
            <div className="paragraph-18px resources-card-author-text">
              Taher Hathi
            </div>
          </div>
          <div className="paragraph-18px resources-card-author-text">-</div>
          <div className="resources-card-timetoread-wrap">
            <div className="paragraph-18px resources-card-timetoread">
              {item.yoast_head_json.twitter_misc['Est. reading time']}
            </div>
          </div>
        </div>
        <div className="resource-card-read-more-button-wrap">
          <Link
            to={`/post/${item.id}`}
            className="read-more-button w-inline-block"
          >
            <div className="read-more-button-content">
              <div className="paragraph-18px read-more-button-text">
                Read More
              </div>
              <img
                alt=""
                loading="lazy"
                src="https://cdn.prod.website-files.com/64ffa4563a3f9aad25e98536/64ffa4563a3f9aad25e985a0_ArrowRight.svg"
                className="read-more-button-icon"
              />
            </div>
            <div className="read-more-button-under-line">
              <div className="read-more-underline" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  ));

  const categories = posts
    .map((item) => item.yoast_head_json.schema['@graph'][0]['articleSection'][0])
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((category) => (
      <Link
        to=""
        className="resources-tab-link w-inline-block"
        key={category}
        style={{ color: 'White', backgroundColor: 'black' }}
        onClick={() => setSelectedCategory(category)}
        dangerouslySetInnerHTML={{ __html: category }}
      />
    ));

  return (
    <>
     <Helmet>
      <title>Techsevvy | Startup and Technology News</title>
      <meta name="description" content="Explore the latest tech news, articles, and updates on Techsevvy's main page." />
      <meta name="keywords" content="Tech, News, Articles, Updates, Main Page" />
    </Helmet>
      <Hero
        logo="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/651dbf514dd0092be734edf6_Group%201171276596.svg"
        heading="Blog"
        desc="The latest news and insights from Techsevvy."
      />
      <section className="section resources-main-section">
        <div className="container-1280px resources-main-container">
          <div
            data-current="Tab 1"
            data-easing="ease"
            data-duration-in={300}
            data-duration-out={100}
            className="resources-tabs hide w-tabs"
          ></div>
          <div className="resources-tabs">
            <div className="resources-tabs-menu">{categories}</div>
            <div className="resources-tabs-content">
              <div className="resources-tab-content">
                <div className="resources-collection-list-wrapper w-dyn-list">
                  <div
                    fs-cmsload-resetix="true"
                    fs-cmsload-element="list"
                    fs-cmsload-mode="pagination"
                    role="list"
                    className="resources-collection-list w-dyn-items"
                  >
                    {loading ? (
                      <p>Loading...</p>
                    ) : (
                      <>
                        {dataElements.length > 0 ? (
                          dataElements
                        ) : (
                          <div>No posts found.</div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="pagination-controls">
                    <div className="w-pagination-previous resources-pagination-button">
                      {currentPage > 1 && (
                        <div
                          onClick={() => handlePageChange(currentPage - 1)}
                          className="paragraph-18px resources-pagination-text w-inline-block"
                          style={{ cursor: 'pointer' }}
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/651dd0356b42b70beebc6411_arrow%20left.svg"
                            alt=""
                            className="resources-pagination-icon"
                          />
                          Previous
                        </div>
                      )}
                    </div>
                    <div className="resources-pagination-page-number-wrap">
                      {renderPageNumbers()}
                    </div>
                    <div className="w-pagination-next resources-pagination-button">
                      {currentPage <
                        Math.ceil(posts.length / postsPerPage) && (
                        <>
                          <div
                            className="paragraph-18px resources-pagination-text w-inline-block"
                            onClick={() =>
                              handlePageChange(currentPage + 1)
                            }
                            style={{ cursor: 'pointer' }}
                          >
                            Next
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2aa/651dd03508dde83fd8f9618b_arrow%20right.svg"
                            alt=""
                            className="resources-pagination-icon"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Subscribe />
        </div>
      </section>
    </>
  );
};

export default Main;
