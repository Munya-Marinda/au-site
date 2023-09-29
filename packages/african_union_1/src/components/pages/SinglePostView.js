import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import { formatDate } from "../js/main";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCalendarAlt,
  FaGreaterThan,
  FaPlay,
  FaSearch,
} from "react-icons/fa";
import Link from "@frontity/components/link";
import { Carousel } from "react-bootstrap";
import { keyResources } from "../handlers/handleMenu";

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
  const [keyResourceIndex, setKeyResourceIndex] = useState(0);
  //
  //
  //
  //
  //
  //

  const CustomPrevButton = ({ onClick }) => {
    return (
      <div onClick={onClick} className="header_carousel_button_parent">
        <FaAngleLeft />
      </div>
    );
  };

  const CustomNextButton = ({ onClick }) => {
    return (
      <div onClick={onClick} className="header_carousel_button_parent">
        <FaAngleRight />
      </div>
    );
  };
  //
  //
  //
  //
  //
  //
  useEffect(() => {
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
      <div className="filter_posts_parent_1 hide_alt">
        <div className="filter_posts_categories">
          <span>Trending</span>
          <span className="filter_posts_categories_even">Latest</span>
          <span>Press Release</span>
        </div>
        <div className="filter_search_1">
          <input
            type="text"
            className="filter_search_input"
            placeholder="Filter Search"
          />
          <FaSearch size={15} style={{ cursor: "pointer" }} />
        </div>
      </div>
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
          <div className="filter_posts_parent_1 hide">
            <div className="filter_posts_categories">
              <span>Trending</span>
              <span className="filter_posts_categories_even">Latest</span>
              <span>Press Release</span>
            </div>
            <div className="filter_search_1">
              <input
                type="text"
                className="filter_search_input"
                placeholder="Filter Search"
              />
              <FaSearch size={15} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="singlepostview_parent_1">
            <img src={postImages[0]} className="singlepostview_feature_img_1" />
            <div className="singlepostview_article_content_1">
              <div className="singlepostview_article_content_list_1">
                <h6>In this article</h6>
                <ol>
                  <li>
                    <Link link="$article-section">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Link>
                    <br />
                  </li>
                  <li>
                    <Link link="$article-section">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Link>
                    <br />
                  </li>
                  <li>
                    <Link link="$article-section">
                      Nibh tellus molestie nunc non blandit massa.
                    </Link>
                    <br />
                  </li>
                  <li>
                    <Link link="$article-section">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Link>
                    <br />
                  </li>
                  <li>
                    <Link link="$article-section">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Link>
                    <br />
                  </li>
                  <li>
                    <Link link="$article-section">
                      Nibh tellus molestie nunc non blandit massa.
                    </Link>
                    <br />
                  </li>
                </ol>
              </div>
              <div
                className="singlepostview_content"
                dangerouslySetInnerHTML={postContent}
              />
            </div>
          </div>
          <div className="singlepostview_sidebar_1">
            <div className="feature_content_header_parent_1">
              <hr />
              <h6 className="singlepostview_header_2">Media Contact</h6>
            </div>
            <br />
            <div className="singlepostview_sidebar_container_1">
              <p>
                <b>Mr Esther Azaa Tankou</b> | Head of Information Division
              </p>
              <p>
                <b>E-Mail:</b> yamboue@african-union.org
              </p>
              <p>
                <b>Tel:</b> +2519911361185 | Ext 2558
              </p>
              <hr />
              <p>
                <b>Mr Gamal Ahmed A. Karrar</b> | Senior Communication Officer
              </p>
              <p>
                <b>E-Mail:</b> GamalK@african-union.org
              </p>
              <p>
                <b>Tel:</b> | Ext
              </p>
            </div>
            <div className="feature_content_header_parent_1">
              <hr />
              <h6 className="singlepostview_header_2">AU Holidays</h6>
            </div>
            <div className="singlepostview_sidebar_container_1">
              <img
                src="https://ambassador.daddysdeals.co.za/features/african-union-assets/nelson-mandela-quote-1.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO */}
      <div className="feature_content_parent_1">
        <div className="feature_content_container_1">
          <div className="feature_content_header_parent_1">
            <hr />
            <h1>Video</h1>
          </div>
          <div className="flagship_project_section">
            <div className="video_section_container_1">
              <div className="video_section_card_1">
                <div
                  className="video_section_preview_1"
                  style={{
                    backgroundImage:
                      'url("https://ambassador.daddysdeals.co.za/features/african-union-assets/flags-1.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="video_section_preview_overlay_1">
                    <div
                      style={{
                        padding: "30px",
                        cursor: "pointer",
                        borderRadius: "100px",
                        border: "3px solid white",
                        backgroundColor: " rgba(0, 0, 0, 0.9)",
                      }}
                    >
                      <FaPlay color="white" size={30} />
                    </div>
                  </div>
                </div>
                <div className="video_section_card_text_1">
                  <p>
                    Explore how the African Union is spearheading technological
                    advancements, from digital infrastructure to tech startups,
                    driving Africa's digital revolution.
                  </p>
                  <span>
                    <FaCalendarAlt size={15} color="#6f6f6f" /> July 29, 2023
                  </span>
                </div>
              </div>
              <div className="video_section_scroll_parent_1">
                {[
                  {
                    image:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/black-woman-1.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  },
                  {
                    image:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/community-1.webp",
                    text: "",
                  },
                  {
                    image:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/conference.jpg",
                    text: "",
                  },
                  {
                    image:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/flags-1.jpg",
                    text: "",
                  },
                  {
                    image:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/friends-2.webp",
                    text: "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.",
                  },
                  {
                    image:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/senior-woman-1.jpg",
                    text: "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.",
                  },
                ].map((video, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: "url('" + video.image + "')",
                    }}
                    className="video_section_scroll_article"
                  >
                    {video.text.length > 0 && (
                      <div className="video_section_scroll_article_overlay">
                        <p>{video.text}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div className="feature_content_parent_1">
        <div className="feature_content_container_1">
          <div className="feature_content_header_parent_1">
            <hr />
            <h1>Partners</h1>
          </div>
          <div className="flagship_project_section">
            <div className="partners_section_container_1">
              <div
                style={{
                  backgroundImage:
                    "https://ambassador.daddysdeals.co.za/features/african-union-assets/black-woman-1.jpg",
                }}
                className="partners_section_logo_1 partners_section_logo_1_border"
              ></div>
              <div className="partners_section_logo_1 partners_section_logo_1_border"></div>
              <div className="partners_section_logo_1 partners_section_logo_1_border"></div>
              <div className="partners_section_logo_1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Related News & Events */}
      <div className="feature_content_parent_1">
        <div className="feature_content_container_1">
          <div className="feature_content_header_parent_1">
            <hr />
            <h1>Related News & Events</h1>
            <Link link="#see-all">See all related News</Link>
          </div>

          <table className="feature_table_1 hide">
            <tbody>
              <tr>
                <td rowSpan={2} colSpan={3} style={{ width: "25%" }}>
                  <div className="feature_cardParent_1">
                    <div
                      className="cardParent_vert_long_1_img"
                      style={{
                        backgroundImage:
                          "url('https://ambassador.daddysdeals.co.za/features/african-union-assets/community-1.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "240px",
                        borderRadius: "10px 10px 0px 0px",
                      }}
                    />
                    <div className="cardParent_vert_long_1_text_parent">
                      <div>
                        <span>Economic</span>
                      </div>
                      <p className="home_content_style_2">
                        "Exploring Africa's Path to Economic Resilience: The
                        African Union's Initiatives To Empower The People of
                        Africa" - Discover how the African Union is driving
                        economic resilience and sustainable growth across the
                        continent, fostering innovation, growth and
                        entrepreneurship amongst all groups of people.
                      </p>
                      <span>
                        <FaCalendarAlt />
                        September 2, 2022
                      </span>
                    </div>
                  </div>
                </td>
                <td colSpan={3}>
                  <div
                    className="feature_cardParent_1"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyItems: "flex-start",
                    }}
                  >
                    <div
                      className="cardParent_vert_long_1_img"
                      style={{
                        backgroundImage:
                          "url('https://ambassador.daddysdeals.co.za/features/african-union-assets/flags-1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "180%",
                        height: "240px",
                        borderRadius: "10px 0px 0px 10px",
                      }}
                    />
                    <div className="cardParent_vert_long_1_text_parent">
                      <div>
                        <span>Peace</span>
                      </div>
                      <p className="home_content_style_2">
                        "Charting a Course for Peace: The African Union's Role
                        in Conflict Resolution" - Delve into the African Union's
                        tireless efforts to mediate conflicts, establish
                        peacekeeping missions, and promote stability in regions
                        facing adversity.
                      </p>
                      <span>
                        <FaCalendarAlt />
                        September 5, 2022
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    className="feature_cardParent_1 cardParent_vert_long_1_text_parent"
                    style={{
                      minHeight: "350px",
                    }}
                  >
                    <div>
                      <span>Gender Equality</span>
                    </div>
                    <p className="home_content_style_2">
                      "Empowering Women in Africa: The African Union's Gender
                      Equality Agenda" - Learn about the African Union's
                      commitment to gender equality, empowering women and girls
                      through policies and initiatives that drive positive
                      change.
                    </p>
                    <span>
                      <FaCalendarAlt />
                      September 10, 2022
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    className="feature_cardParent_1 cardParent_vert_long_1_text_parent"
                    style={{
                      minHeight: "350px",
                    }}
                  >
                    <div>
                      <span>Technology</span>
                    </div>
                    <p className="home_content_style_2">
                      "Innovations Transforming Africa: Spotlight on the African
                      Union's Tech Initiatives" - Explore how the African Union
                      is spearheading technological advancements, from digital
                      infrastructure to tech startups, driving Africa's digital
                      revolution.
                    </p>
                    <span>
                      <FaCalendarAlt />
                      September 15, 2022
                    </span>
                  </div>
                </td>
                <td>
                  <div
                    className="feature_cardParent_1 cardParent_vert_long_1_text_parent"
                    style={{
                      minHeight: "350px",
                    }}
                  >
                    <div>
                      <span>Technology</span>
                    </div>
                    <p className="home_content_style_2">
                      "Innovations Transforming Africa: Spotlight on the African
                      Union's Tech Initiatives" - Explore how the African Union
                      is spearheading technological advancements, from digital
                      infrastructure to tech startups, driving Africa's digital
                      revolution.
                    </p>
                    <span>
                      <FaCalendarAlt />
                      September 15, 2022
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="feature_table_mobile_1 hide_alt">
            <tbody>
              <tr>
                <td className="cardParent_tr_1">
                  <div
                    className="cardParent_mobile_1_img"
                    style={{
                      backgroundImage:
                        "url('https://ambassador.daddysdeals.co.za/features/african-union-assets/community-1.webp')",
                    }}
                  />
                </td>
                <td className="cardParent_tr_2">
                  <div className="mobile_category_1">
                    <span>Economic</span>
                  </div>
                  <Link link="/mandela-day/lessons-you-can-learn-from-madiba-this-mandela-day/">
                    <p className="home_content_style_2">
                      "Exploring Africa's Path to Economic Resilience: The
                      African Union's Initiatives To Empower The People of
                      Africa"
                    </p>
                  </Link>
                  <span>
                    <FaCalendarAlt />
                    September 2, 2022
                  </span>
                </td>
              </tr>
              <tr>
                <td className="cardParent_tr_1">
                  <div
                    className="cardParent_mobile_1_img"
                    style={{
                      backgroundImage:
                        "url('https://ambassador.daddysdeals.co.za/features/african-union-assets/flags-1.jpg')",
                    }}
                  />
                </td>
                <td className="cardParent_tr_2">
                  <div className="mobile_category_1">
                    <span>Peace</span>
                  </div>
                  <Link link="/mandela-day/lessons-you-can-learn-from-madiba-this-mandela-day/">
                    <p className="home_content_style_2">
                      "Charting a Course for Peace: The African Union's Role in
                      Conflict Resolution"
                    </p>
                  </Link>
                  <span>
                    <FaCalendarAlt />
                    September 5, 2022
                  </span>
                </td>
              </tr>
              <tr>
                <td className="cardParent_tr_3" colSpan={2}>
                  <div className="mobile_category_1">
                    <span>Gender Equality</span>
                  </div>
                  <Link link="/mandela-day/lessons-you-can-learn-from-madiba-this-mandela-day/">
                    <p className="home_content_style_2">
                      "Empowering Women in Africa: The African Union's Gender
                      Equality Agenda" - Learn about the African Union's
                      commitment to gender equality, empowering women and girls
                      through policies and initiatives that drive positive
                      change.
                    </p>
                  </Link>
                  <span>
                    <FaCalendarAlt />
                    September 10, 2022
                  </span>
                </td>
              </tr>
              <tr>
                <td className="cardParent_tr_3" colSpan={2}>
                  <div className="mobile_category_1">
                    <span>Technology</span>
                  </div>
                  <Link link="/mandela-day/lessons-you-can-learn-from-madiba-this-mandela-day/">
                    <p className="home_content_style_2">
                      "Innovations Transforming Africa: Spotlight on the African
                      Union's Tech Initiatives" - Explore how the African Union
                      is spearheading technological advancements, from digital
                      infrastructure to tech startups, driving Africa's digital
                      revolution.
                    </p>
                  </Link>
                  <span>
                    <FaCalendarAlt />
                    September 15, 2022
                  </span>
                </td>
              </tr>
              <tr>
                <td className="cardParent_tr_3" colSpan={2}>
                  <div className="mobile_category_1">
                    <span>Technology</span>
                  </div>
                  <Link link="/mandela-day/lessons-you-can-learn-from-madiba-this-mandela-day/">
                    <p className="home_content_style_2">
                      "Innovations Transforming Africa: Spotlight on the African
                      Union's Tech Initiatives" - Explore how the African Union
                      is spearheading technological advancements, from digital
                      infrastructure to tech startups, driving Africa's digital
                      revolution.
                    </p>
                  </Link>
                  <span>
                    <FaCalendarAlt />
                    September 15, 2022
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* KEY RESOURCES */}
      <div className="feature_content_parent_1">
        <div className="feature_content_container_1">
          <div className="feature_content_header_parent_1">
            <hr />
            <h1>Key Resources</h1>
            <div className="key_resources_tab_buttons_parent">
              {keyResources.map((resource, index) => (
                <span
                  onClick={() => {
                    setKeyResourceIndex(index);
                  }}
                  className="key_resources_tab_button"
                  key={index}
                >
                  {resource.title}
                </span>
              ))}
            </div>
          </div>
          <div className="key_resources_section">
            <div className="key_resources_tab flexRow_alnStart_JstApart hide">
              {keyResourceIndex !== -1 && (
                <>
                  {keyResources[keyResourceIndex].resources.map(
                    (resource, index) => {
                      return (
                        <div
                          key={index}
                          style={{ backgroundColor: resource.color }}
                          className="key_resources_tab_box"
                        >
                          <div>
                            <span>{resource.category}</span>
                          </div>
                          <h4>{resource.title}</h4>
                          <p>{resource.text}</p>
                        </div>
                      );
                    }
                  )}
                </>
              )}
            </div>

            <div className="key_resources_tab flexRow_alnStart_JstApart hide_alt">
              {keyResourceIndex !== -1 && (
                <Carousel
                  indicators={false}
                  prevIcon={<CustomPrevButton />}
                  nextIcon={<CustomNextButton />}
                >
                  {keyResources[keyResourceIndex].resources.map(
                    (resource, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <div
                            style={{ backgroundColor: resource.color }}
                            className="key_resources_tab_box"
                          >
                            <div>
                              <span>{resource.category}</span>
                            </div>
                            <h4>{resource.title}</h4>
                            <p>{resource.text}</p>
                          </div>
                        </Carousel.Item>
                      );
                    }
                  )}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default connect(SinglePostView);
