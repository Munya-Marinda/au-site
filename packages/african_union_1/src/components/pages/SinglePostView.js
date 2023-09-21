import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import { CustomWPRestServicePostObject, formatDate } from "../js/main";
import { FaGreaterThan, FaSearch } from "react-icons/fa";
import Link from "@frontity/components/link";

const SinglePostView = ({ state }) => {
  const WP_SiteUrl = state.source.url;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  //
  const postID = post.id;
  const postTitle = { __html: post.title.rendered.trim() };
  const postContent = { __html: post.content.rendered.trim() };
  const postExcerpt = { __html: post.excerpt.rendered.trim() };
  const postDate = formatDate(post.date);
  const postAuthorID = post._embedded.author;
  //
  const postsSet1_categoryID = 3;
  const [postsSet1, setPostsSet1] = useState(null);
  const [currentPost, setCurrentPost] = useState(null);
  const [postImages, setPostImages] = useState([]);
  const [adPositions, setAdPositions] = useState(false);
  //
  //
  //
  //
  //
  //
  useEffect(() => {
    console.log(postExcerpt);
    //
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl + "/wp-json/wp/v2/posts/" + postID + "?_embed"
        );
        if (!response.ok) {
          setCurrentPost(false);
          return;
        }
        const postData = await response.json();
        setCurrentPost(postData);
        const tempPostImages = [];
        if (postData) {
          postData._embedded["wp:featuredmedia"].forEach((img) => {
            tempPostImages.push(img.link);
          });
        }
        setPostImages(tempPostImages);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setCurrentPost(false);
      }
    };
    fetchCurrentPost();
    //
    //
    const fetch1Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet1_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet1(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet1(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet1(false);
      }
    };
    fetch1Posts();
    //
  }, [post]);

  //
  //
  //
  //
  return (
    <main className="homepage_main_parent_1">
      <div className="breadcrum_parent_1">
        <span className="breadcrum_text_1">News & Events</span>
        <span className="breadcrum_divider_1">
          <FaGreaterThan size={10} />
          <FaGreaterThan size={10} />
        </span>
        <span className="breadcrum_text_1">Article</span>
      </div>
      <div className="singlepostview_header_parent_1">
        <h1
          className="singlepostview_header_1"
          dangerouslySetInnerHTML={postTitle}
        />
        <div dangerouslySetInnerHTML={postExcerpt} />
      </div>
      <div className="feature_content_parent_1">
        <div className="singlepostview_content_parent_1">
          <div className="filter_posts_parent_1">
            <div className="filter_posts_categories">
              <span>Trending</span>
              <span className="filter_posts_categories_even">Latest</span>
              <span>Press Release</span>
            </div>
            <div className="filter_search_1">
              <span>Filter Search</span> 
              <FaSearch />
            </div>
          </div>
          <div className="singlepostview_parent_1">
            <img src={postImages[0]} width={"400px"} />
            <div className="singlepostview_article_content_1">
              <h6>In this article</h6>
              <div className="singlepostview_article_content_list_1">
                <ol>
                  <li>
                    <Link link="$article-section">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Link>
                  </li>
                  <li>
                    <Link link="$article-section">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Link>
                  </li>
                  <li>
                    <Link link="$article-section">
                      Nibh tellus molestie nunc non blandit massa.
                    </Link>
                  </li>
                  <li>
                    <Link link="$article-section">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Link>
                  </li>
                  <li>
                    <Link link="$article-section">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Link>
                  </li>
                  <li>
                    <Link link="$article-section">
                      Nibh tellus molestie nunc non blandit massa.
                    </Link>
                  </li>
                </ol>
              </div>
              <p
                className="singlepostview_content"
                dangerouslySetInnerHTML={postContent}
              />
            </div>
          </div>
          <div className="singlepostview_sidebar_1">
            <h1>MORE CONTENT</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default connect(SinglePostView);
