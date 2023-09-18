import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
  FaCalendarAlt,
  FaHandshake,
  FaPlay,
} from "react-icons/fa";
import { BiSolidFactory } from "react-icons/bi";
import { GiAfrica, GiColumnVase, GiPeaceDove } from "react-icons/gi";
import { FaBuildingColumns, FaPeopleRobbery } from "react-icons/fa6";
import { Carousel } from "react-bootstrap";
import { keyResources } from "../handlers/handleMenu";

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

const HomePage = ({ state }) => {
  const [keyResourceIndex, setKeyResourceIndex] = useState(0);
  //
  //
  //
  //
  //
  //
  //

  return (
    <main className="homepage_main_parent_1">
      <div className="homepage_headerImage_parent_1">
        <div className="homepage_headerImage_parent_1_overlay">
          <div className="homepage_headerImage_container_1">
            <h1 className="homepage_headerImage_header_1">
              Empowering Africa's Future
            </h1>
            <div className="flexRow_alnStart_JstApart">
              <div className="homepage_headerImage_textBox_active">
                <hr />
                <p className="home_content_style_1">
                  At the African Union, our vision is clear - a united and
                  thriving Africa. We believe in the immense potential of our
                  continent and are dedicated to harnessing it for the
                  betterment of all Africans.
                </p>
              </div>
              <div className="homepage_headerImage_textBox">
                <hr />
                <p className="home_content_style_1">
                  We work tirelessly to promote peace and stability across
                  Africa, resolving conflicts and creating the conditions for
                  development and growth.
                </p>
              </div>
              <div className="homepage_headerImage_textBox">
                <hr />
                <p className="home_content_style_1">
                  Economic development is at the heart of our mission. We're
                  committed to creating opportunities for all Africans,
                  fostering economic growth, and reducing inequalities.
                </p>
              </div>
              <div className="homepage_headerImage_textBox">
                <hr />
                <p className="home_content_style_1">
                  Africa is a hub of innovation, and we're here to support and
                  harness that creativity. From technological advancements to
                  scientific breakthroughs, we're driving innovation that
                  benefits all.
                </p>
              </div>
              <div className="homepage_headerImage_textBox">
                <hr />
                <p className="home_content_style_1">
                  We believe in inclusive development, where no one is left
                  behind. Our programs and initiatives prioritize the most
                  vulnerable, ensuring they have access to education,
                  healthcare, and more.
                </p>
              </div>
              <div className="homepage_headerImage_textBox">
                <hr />
                <p className="home_content_style_1">
                  Africa is a continent of diverse cultures and traditions, and
                  we celebrate this diversity. Through unity, we're embracing
                  our differences, strengthening our collective voice, and
                  building a brighter future for all Africans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* EVENTS */}
      <div className="feature_content_parent_1">
        <div className="feature_content_container_1">
          <div className="feature_content_header_parent_1">
            <hr />
            <h1>News</h1>
            <Link link="#see-all">See All</Link>
          </div>
          <table className="feature_table_1">
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
                      "Charting a Course for Peace: The African Union's Role in
                      Conflict Resolution" - Delve into the African Union's
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
                    through policies and initiatives that drive positive change.
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
                    Union's Tech Initiatives" - Explore how the African Union is
                    spearheading technological advancements, from digital
                    infrastructure to tech startups, driving Africa's digital
                    revolution.
                  </p>
                  <span>
                    <FaCalendarAlt />
                    September 15, 2022
                  </span>
                </div>
              </td>
              <td rowSpan={2}>
                <div className="feature_cardParent_1">
                  <div
                    className="cardParent_vert_long_1_img"
                    style={{
                      backgroundImage:
                        "url('https://ambassador.daddysdeals.co.za/features/african-union-assets/passport-1.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "240px",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  />
                  <div
                    className="cardParent_vert_long_1_text_parent"
                    style={{
                      minHeight: "360px",
                    }}
                  >
                    <div>
                      <span>Agenda-2063</span>
                    </div>
                    <p className="home_content_style_2">
                      "African Union's Agenda 2063: Shaping the Future of the
                      Continent" - Dive into Agenda 2063, the African Union's
                      comprehensive plan for transforming Africa into a
                      thriving, integrated, and self-reliant continent by 2063.
                      Learn how it's reshaping the future of the continent.
                    </p>
                    <span>
                      <FaCalendarAlt />
                      October 2, 2022
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyItems: "flex-start",
                  }}
                  className="feature_cardParent_1"
                >
                  <div
                    className="cardParent_vert_long_1_img"
                    style={{
                      backgroundImage:
                        "url('https://ambassador.daddysdeals.co.za/features/african-union-assets/black-woman-1.jpg')",
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
                      <span>News</span>
                    </div>
                    <p className="home_content_style_2">
                      "African Union's Vision 2063: Shaping Africa's Future" -
                      Dive into the ambitious Agenda 2063, the African Union's
                      strategic framework for transforming Africa into a united,
                      prosperous, and self-reliant continent. Explore its key
                      goals and the path to achieving them.
                    </p>
                    <span>
                      <FaCalendarAlt />
                      September 25, 2022
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      {/* EVENTS */}
      <div className="feature_content_parent_1">
        <div className="feature_content_container_1">
          <div className="feature_content_header_parent_1">
            <hr />
            <h1>Events</h1>
            <Link link="#see-all">See All</Link>
          </div>
          <table className="feature_table_1">
            <tr>
              <td rowSpan={2} colSpan={3} style={{ width: "25%" }}>
                <div className="feature_cardParent_1">
                  <div
                    className="cardParent_vert_long_1_img"
                    style={{
                      backgroundImage:
                        "url('https://ambassador.daddysdeals.co.za/features/african-union-assets/conference.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "240px",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  />
                  <div
                    className="cardParent_vert_long_1_text_parent"
                    style={{ minHeight: "400px" }}
                  >
                    <div>
                      <span>Economic</span>
                    </div>
                    <p className="home_content_style_1">
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

              <td>
                <div
                  className="feature_cardParent_1 cardParent_vert_long_1_text_parent"
                  style={{
                    minHeight: "380px",
                  }}
                >
                  <div>
                    <span>Gender Equality</span>
                  </div>
                  <p className="home_content_style_1">
                    "Empowering Women in Africa: The African Union's Gender
                    Equality Agenda" - Learn about the African Union's
                    commitment to gender equality, empowering women and girls
                    through policies and initiatives that drive positive change.
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
                    minHeight: "380px",
                  }}
                >
                  <div>
                    <span>Technology</span>
                  </div>
                  <p className="home_content_style_1">
                    "Innovations Transforming Africa: Spotlight on the African
                    Union's Tech Initiatives" - Explore how the African Union is
                    spearheading technological advancements, from digital
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
                    minHeight: "380px",
                  }}
                >
                  <div>
                    <span>Technology</span>
                  </div>
                  <p className="home_content_style_1">
                    "Innovations Transforming Africa: Spotlight on the African
                    Union's Tech Initiatives" - Explore how the African Union is
                    spearheading technological advancements, from digital
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
            <tr>
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
                        "url('https://ambassador.daddysdeals.co.za/features/african-union-assets/senior-woman-1.jpg')",
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
                    <p className="home_content_style_1">
                      "Charting a Course for Peace: The African Union's Role in
                      Conflict Resolution" - Delve into the African Union's
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
          </table>
        </div>
      </div>
      {/* ASPIRATIONS */}
      <div className="feature_content_parent_1">
        <div className="feature_content_container_1">
          <div className="feature_content_header_parent_1">
            <hr />
            <h1>Aspirations</h1>
            <Link link="#see-all">See All</Link>
          </div>
          <div className="aspirations_parent_1">
            <div className="aspirations_parentBlock_1">
              <span className="aspirations_header_1">
                Aspiration <span className="aspirations_bgcolor_1">1</span>
              </span>
              <p className="home_content_style_1">
                A prosperous Africa based on inclusive growth and sustainable
                development
              </p>
              <div className="aspirations_parentBlock_link_1">
                <span className="aspirations_bgcolor_1">
                  <BiSolidFactory size={32} />
                </span>
                <Link
                  link="#discover-the-goals"
                  className="aspirations_color_1"
                >
                  Discover the Goals <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="aspirations_parentBlock_1">
              <span className="aspirations_header_1">
                Aspiration <span className="aspirations_bgcolor_2">2</span>
              </span>
              <p className="home_content_style_1">
                An integrated continent, politically united and based on the
                ideals of Pan-Africanism and vision of Africa's Renaissance
              </p>
              <div className="aspirations_parentBlock_link_1">
                <span className="aspirations_bgcolor_2">
                  <GiAfrica size={32} />
                </span>
                <Link
                  link="#discover-the-goals"
                  className="aspirations_color_2"
                >
                  Discover the Goals <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="aspirations_parentBlock_1">
              <span className="aspirations_header_1">
                Aspiration <span className="aspirations_bgcolor_3">3</span>
              </span>
              <p className="home_content_style_1">
                An Africa of good governance, democracy, respect for human
                rights, justice and the rule of law
              </p>
              <div className="aspirations_parentBlock_link_1">
                <span className="aspirations_bgcolor_3">
                  <FaBuildingColumns size={32} />
                </span>
                <Link
                  link="#discover-the-goals"
                  className="aspirations_color_3"
                >
                  Discover the Goals <FaArrowRight />
                </Link>
              </div>
            </div>
            <div
              className="aspirations_parentBlock_1_video"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1547226706-af7e2c20bcea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80")',
              }}
            >
              <div className="aspirations_parentBlock_1_video_overlay">
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
            <div className="aspirations_parentBlock_1">
              <span className="aspirations_header_1">
                Aspiration <span className="aspirations_bgcolor_4">4</span>
              </span>
              <p className="home_content_style_1">
                An African with a strong cultural identity, common heritage,
                shared values and ethics
              </p>
              <div className="aspirations_parentBlock_link_1">
                <span className="aspirations_bgcolor_4">
                  <GiColumnVase size={32} />
                </span>
                <Link
                  link="#discover-the-goals"
                  className="aspirations_color_4"
                >
                  Discover the Goals <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="aspirations_parentBlock_1 aspirations_bgcolor_5">
              <span className="aspirations_header_2">
                Aspiration{" "}
                <span className="aspirations_bgcolor_5_2 aspirations_color_5">
                  5
                </span>
              </span>
              <p className="home_content_style_1 cl_white_important">
                An African, whose development is people-driven, relying on the
                potential of African people, especially its women and youth, and
                caring for children
              </p>
              <div className="aspirations_parentBlock_link_1">
                <span className="aspirations_bgcolor_5_2">
                  <FaPeopleRobbery size={32} />
                </span>
                <Link
                  link="#discover-the-goals"
                  className="aspirations_color_5_2"
                >
                  Discover the Goals <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="aspirations_parentBlock_1">
              <span className="aspirations_header_1">
                Aspiration <span className="aspirations_bgcolor_6">6</span>
              </span>
              <p className="home_content_style_1">
                A peaceful and secure Africa
              </p>
              <div className="aspirations_parentBlock_link_1">
                <span className="aspirations_bgcolor_6">
                  <GiPeaceDove size={32} />
                </span>
                <Link
                  link="#discover-the-goals"
                  className="aspirations_color_6"
                >
                  Discover the Goals <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="aspirations_parentBlock_1">
              <span className="aspirations_header_1">
                Aspiration <span className="aspirations_bgcolor_7">7</span>
              </span>
              <p className="home_content_style_1">
                Africa as a strong, united, resilient and influential global
                player and partner
              </p>
              <div className="aspirations_parentBlock_link_1">
                <span className="aspirations_bgcolor_7">
                  <FaHandshake size={32} />
                </span>
                <Link
                  link="#discover-the-goals"
                  className="aspirations_color_7"
                >
                  Discover the Goals <FaArrowRight />
                </Link>
              </div>
            </div>
            <div
              className="aspirations_parentBlock_1_video"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1547226706-af7e2c20bcea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80")',
              }}
            >
              <div className="aspirations_parentBlock_1_video_overlay">
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
          </div>
        </div>
      </div>
      {/* FLAGSHIP PROJECTS */}
      <div className="feature_content_parent_1">
        <div className="feature_content_container_1">
          <div className="feature_content_header_parent_1">
            <hr />
            <h1>Flagship Projects</h1>
            <Link link="#see-all">See All</Link>
          </div>
          <div className="flagship_project_section">
            <Carousel
              indicators={false}
              prevIcon={<CustomPrevButton />}
              nextIcon={<CustomNextButton />}
            >
              {[
                [
                  {
                    title: "The Title",
                    blurb: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                  {
                    title: "The Title",
                    blurb: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                  {
                    title: "The Title",
                    blurb: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                ],
                [
                  {
                    title: "The Title",
                    blurb: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                  {
                    title: "The Title",
                    blurb: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                  {
                    title: "The Title",
                    blurb: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                ],
                [
                  {
                    title: "The Title",
                    blurb: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                  {
                    title: "The Title",
                    blurb: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                  {
                    title: "The Title",
                    blurb: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                ],
              ].map((postArr, index) => {
                //
                //
                //
                return (
                  <Carousel.Item key={index}>
                    <div className="flagship_project_item_parent">
                      {postArr.map((post, index) => {
                        return (
                          <Link link={"#flagship-project-" + index}>
                            <div
                              className="flagship_project_box"
                              style={{
                                backgroundImage:
                                  "url('" +
                                  post.imgUrl +
                                  "feature-image (" +
                                  (index + 1) +
                                  ").png" +
                                  "')",
                              }}
                            >
                              <div className="flagship_project_box_overlay">
                                <h4>{post.title}</h4>
                                <h6>{post.blurb}</h6>
                                <p>{post.content}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
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
            <div className="key_resources_tab flexRow_alnStart_JstApart">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default connect(HomePage);
