import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Link from "@frontity/components/link";
import { Carousel } from "react-bootstrap";
import { connect } from "frontity";
import SocialMediaIcons from "./SocialMediaIcons";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
} from "react-icons/fa";
import {
  knowledgeHeaderData,
  stateData,
  NewsAndEventsHeaderData,
  ResourcesHeaderData,
  GetInvolvedHeaderData,
} from "../handlers/handleMenu";

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

const Header = () => {
  const [stateIndex, setStateIndex] = useState(-1);
  const [countryIndex, setCountryIndex] = useState(-1);
  const [countryData, setCountryData] = useState(null);
  //
  const [knowledgeIndex, setKnowledgeIndex] = useState(-1);
  const [knowledgeSubIndex, setKnowledgeSubIndex] = useState(-1);
  const [knowledgeData, setKnowledgeData] = useState(null);
  //
  const [newsAndEventsIndex, setNewsAndEventsIndex] = useState(-1);
  const [newsAndEventsSubIndex, setNewsAndEventsSubIndex] = useState(-1);
  const [newsAndEventsData, setNewsAndEventsData] = useState(null);
  //
  const [resourcesIndex, setResourcesIndex] = useState(-1);
  const [resourcesSubIndex, setResourcesSubIndex] = useState(-1);
  const [resourcesData, setResourcesData] = useState(null);
  //
  const [getInvolvedIndex, setGetInvolvedIndex] = useState(-1);
  const [getInvolvedSubIndex, setGetInvolvedSubIndex] = useState(-1);
  const [getInvolvedData, setGetInvolvedData] = useState(null);
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  const MemberStatesDropdown = () => {
    //
    //
    //
    return (
      <div className="header_nav_parent_dropdown">
        <div className="dropdown_column_1">
          <ul>
            {stateData.map((state, index) => {
              //
              //
              return (
                <li
                  key={index}
                  onClick={() => {
                    setStateIndex(index);
                    setCountryIndex(-1);
                    setCountryData(null);
                  }}
                  className={index === stateIndex ? "dropdown_active_link" : ""}
                >
                  {state.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown_column_2">
          <ul>
            {stateIndex !== -1 && (
              <>
                {stateData[stateIndex].countries.map((country, index) => (
                  <li
                    className={
                      index === countryIndex
                        ? "dropdown_active_country_link"
                        : ""
                    }
                    key={index}
                    onClick={() => {
                      setCountryData(country);
                      setCountryIndex(index);
                    }}
                  >
                    <img
                      className="dropdown_column_2_flag_img"
                      src={country.flag}
                      alt={"Flag of " + country.name}
                    />
                    {country.name}
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        <div className="dropdown_column_3 flexRow_alnStart_JstApart">
          {countryData !== null && countryIndex !== -1 && (
            <>
              <img
                src={countryData.imgUrl}
                alt={"Picture of " + countryData.name}
              />
              <div className="dropdown_column_3_div">
                <p>{countryData.text}</p>
                <Link link={countryData.url}>
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  //
  //
  const KnowledgeStatesDropdown = () => {
    return (
      <div className="header_nav_parent_dropdown">
        <div className="dropdown_column_1">
          <ul>
            {knowledgeHeaderData.map((state, index) => {
              //
              //
              return (
                <li
                  key={index}
                  onClick={() => {
                    setKnowledgeIndex(index);
                    setKnowledgeSubIndex(-1);
                    setKnowledgeData(null);
                  }}
                  className={
                    index === knowledgeIndex ? "dropdown_active_link" : ""
                  }
                >
                  {state.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown_column_2">
          <ul>
            {knowledgeIndex !== -1 && (
              <>
                {knowledgeHeaderData[knowledgeIndex].countries.map(
                  (country, index) => (
                    <li
                      className={
                        index === knowledgeSubIndex
                          ? "dropdown_active_country_link"
                          : ""
                      }
                      key={index}
                      onClick={() => {
                        setKnowledgeData(country);
                        setKnowledgeSubIndex(index);
                      }}
                    >
                      {country.name}
                    </li>
                  )
                )}
              </>
            )}
          </ul>
        </div>
        <div className="dropdown_column_3 flexRow_alnStart_JstApart">
          {knowledgeData !== null && knowledgeSubIndex !== -1 && (
            <>
              <img
                src={knowledgeData.imgUrl}
                alt={"Picture of " + knowledgeData.name}
              />
              <div className="dropdown_column_3_div">
                <p>{knowledgeData.text}</p>
                <Link link={knowledgeData.url}>
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  //
  //
  const NewsAndEventsDropdown = () => {
    return (
      <div className="header_nav_parent_dropdown">
        <div className="dropdown_column_1 dropdown_column_div_by_3">
          <ul>
            {NewsAndEventsHeaderData.map((state, index) => {
              //
              //
              return (
                <li
                  key={index}
                  onClick={() => {
                    setNewsAndEventsIndex(index);
                    setNewsAndEventsSubIndex(-1);
                    setNewsAndEventsData(null);
                  }}
                  className={
                    index === newsAndEventsIndex ? "dropdown_active_link" : ""
                  }
                >
                  {state.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown_column_2 dropdown_column_div_by_3">
          <ul>
            {newsAndEventsIndex !== -1 && (
              <>
                {NewsAndEventsHeaderData[newsAndEventsIndex].content.map(
                  (country, index) => (
                    <li
                      className={
                        index === newsAndEventsSubIndex
                          ? "dropdown_active_country_link"
                          : ""
                      }
                      key={index}
                      onClick={() => {
                        setNewsAndEventsData(country);
                        setNewsAndEventsSubIndex(index);
                      }}
                    >
                      {country.name}
                    </li>
                  )
                )}
              </>
            )}
          </ul>
        </div>
        <div className="dropdown_column_2 dropdown_column_div_by_3">
          <ul>
            {newsAndEventsData !== null && newsAndEventsSubIndex !== -1 && (
              <>
                {newsAndEventsData.news.map((post, index) => {
                  return (
                    <li key={index}>
                      <Link className={"dropdown_title_link"} link={post.url}>
                        {post.header}
                      </Link>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
    );
  };
  //
  //
  const ResourcesDropdown = () => {
    return (
      <div className="header_nav_parent_dropdown">
        <div className="dropdown_column_1 dropdown_column_div_by_3">
          <ul>
            {ResourcesHeaderData.map((state, index) => {
              //
              //
              return (
                <li
                  key={index}
                  onClick={() => {
                    setResourcesIndex(index);
                    setResourcesSubIndex(-1);
                    setResourcesData(null);
                  }}
                  className={
                    index === resourcesIndex ? "dropdown_active_link" : ""
                  }
                >
                  {state.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown_column_2 dropdown_column_div_by_3">
          <ul>
            {resourcesIndex !== -1 && (
              <>
                {ResourcesHeaderData[resourcesIndex].content.map(
                  (country, index) => (
                    <li
                      className={
                        index === resourcesSubIndex
                          ? "dropdown_active_country_link"
                          : ""
                      }
                      key={index}
                      onClick={() => {
                        setResourcesData(country);
                        setResourcesSubIndex(index);
                      }}
                    >
                      {country.name}
                    </li>
                  )
                )}
              </>
            )}
          </ul>
        </div>
        <div className="dropdown_column_2 dropdown_column_div_by_3">
          <ul>
            {resourcesData !== null && resourcesSubIndex !== -1 && (
              <>
                {resourcesData.news.map((post, index) => {
                  return (
                    <li key={index}>
                      <Link className={"dropdown_title_link"} link={post.url}>
                        {post.header}
                      </Link>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
    );
  };
  //
  //
  const GetInvolvedDropdown = () => {
    return (
      <div className="header_nav_parent_dropdown">
        <div className="dropdown_column_1 dropdown_column_div_by_3">
          <ul>
            {GetInvolvedHeaderData.map((state, index) => {
              //
              //
              return (
                <li
                  key={index}
                  onClick={() => {
                    setGetInvolvedIndex(index);
                    setGetInvolvedSubIndex(-1);
                    setGetInvolvedData(null);
                  }}
                  className={
                    index === getInvolvedIndex ? "dropdown_active_link" : ""
                  }
                >
                  {state.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dropdown_column_2 dropdown_column_div_by_3">
          <ul>
            {getInvolvedIndex !== -1 && (
              <>
                {GetInvolvedHeaderData[getInvolvedIndex].content.map(
                  (country, index) => (
                    <li
                      className={
                        index === getInvolvedSubIndex
                          ? "dropdown_active_country_link"
                          : ""
                      }
                      key={index}
                      onClick={() => {
                        setGetInvolvedData(country);
                        setGetInvolvedSubIndex(index);
                      }}
                    >
                      {country.name}
                    </li>
                  )
                )}
              </>
            )}
          </ul>
        </div>
        <div className="dropdown_column_2 dropdown_column_div_by_3">
          <ul>
            {getInvolvedData !== null && getInvolvedSubIndex !== -1 && (
              <>
                {getInvolvedData.news.map((post, index) => {
                  return (
                    <li key={index}>
                      <Link className={"dropdown_title_link"} link={post.url}>
                        {post.header}
                      </Link>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
    );
  };
  //
  //
  //
  //
  //
  //
  //
  return (
    <>
      {/* LANGUAGE SELECTION */}
      <div className="header_parent_1 primary_background_color">
        <div className="header_parent_container_1 ">
          <div className="header_language_parent_1">
            <span className="header_language_span_1">
              <Link link="#arabic">العربية</Link>
              <span className="header_language_span_divider_1">|</span>
              <Link link="#frence">Français</Link>
              <span className="header_language_span_divider_1">|</span>
              <Link link="#english">English</Link>
              <span className="header_language_span_divider_1">|</span>
              <Link link="#portugues">Português</Link>
            </span>
          </div>
        </div>
      </div>
      {/* LOGO | WEBMAIL | SOCIAL MEDIA ICONS */}
      <div className="header_parent_1 box_shadow_1">
        <div className="header_parent_container_1">
          <div className="header_contact_parent_2">
            <img
              alt="African Union Logo"
              className="header_logo_1"
              src="https://ambassador.daddysdeals.co.za/features/african-union-assets/auweblogo-en.png"
            />
            <div className="header_icons_webmail_parent_1">
              <span className="header_webmail_text_1">WEBMAIL</span>
              <div className="header_divider_1"></div>
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
      {/* FEATURED ARTICLES CAROUSEL */}
      <div className="header_parent_1 ">
        <div className="header_parent_container_1">
          <div className="header_contact_parent_1">
            <img
              alt="Agenda 2026 Logo"
              className="header_agenda2026_logo_1"
              src="https://ambassador.daddysdeals.co.za/features/african-union-assets/agenda_2063_logo_eng-02.png"
            />
            <div className="header_feature_carousel_parent_1">
              <Carousel
                indicators={false}
                prevIcon={<CustomPrevButton />}
                nextIcon={<CustomNextButton />}
              >
                {[
                  {
                    title: "The Title",
                    category: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                  {
                    title: "The Title",
                    category: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                  {
                    title: "The Title",
                    category: "PRESS RELEASE",
                    imgUrl:
                      "https://ambassador.daddysdeals.co.za/features/african-union-assets/feature-images/",
                    content:
                      "The African Union, a continental organization dedicated to promoting unity, peace, and prosperityamong its member states.",
                  },
                ].map((post, index) => {
                  //
                  //
                  return (
                    <Carousel.Item key={index}>
                      <div className="header_feature_carousel_item_1 flexRow_alnCenter_JstCenter">
                        <img
                          alt="Feature Image"
                          className="header_feature_carousel_image_1 hide"
                          src={
                            post.imgUrl +
                            "feature-image (" +
                            (index + 1) +
                            ").png"
                          }
                        />
                        <div className="header_feature_carousel_text_parent_1">
                          <div className="header_feature_carousel_text_category_1">
                            <span>{post.category}</span>
                          </div>
                          <p className="header_feature_carousel_text_1">
                            {post.content}
                          </p>
                        </div>
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* DESKTOP NAV */}
      <div className="header_parent_1 primary_background_color secondary_bottomBorder_color hide">
        <div className="header_parent_container_1">
          <div className="header_nav_parent_1">
            <div className="header_nav_container_1">
              <Link link="#home" className="header_nav_active_1">
                Home
              </Link>
              <Link link="#about" className="">
                About
              </Link>
              <span className="dropdown_link">
                <Link link="#member_states">
                  Member States <FaAngleDown />
                </Link>
                <MemberStatesDropdown />
              </span>
              <span className="dropdown_link">
                <Link link="#news_and_events" className="">
                  News & Events <FaAngleDown />
                </Link>
                <NewsAndEventsDropdown />
              </span>
              <span className="dropdown_link">
                <Link link="#knowledge" className="">
                  Knowledge <FaAngleDown />
                </Link>
                <KnowledgeStatesDropdown />
              </span>
              <span className="dropdown_link">
                <Link link="#resources" className="">
                  Resources <FaAngleDown />
                </Link>
                <ResourcesDropdown />
              </span>
              <span className="dropdown_link">
                <Link link="#get-involved" className="">
                  Get Involved <FaAngleDown />
                </Link>
                <GetInvolvedDropdown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(Header);
