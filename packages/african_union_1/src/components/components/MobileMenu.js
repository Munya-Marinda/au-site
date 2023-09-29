import React, { useState } from "react";
import Link from "@frontity/components/link";
import { connect } from "frontity";
import { FaAngleDown, FaArrowRight, FaBars } from "react-icons/fa";
import {
  knowledgeHeaderData,
  stateData,
  NewsAndEventsHeaderData,
  ResourcesHeaderData,
  GetInvolvedHeaderData,
} from "../handlers/handleMenu";

const MobileMenu = () => {
  //
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
  const [dropDown, setDropDown] = useState("");
  const [showMenu, setShowMenu] = useState(false);
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
  //
  const MemberStatesDropdown = () => {
    //
    //
    //
    return (
      <div className="mobile_menu_nav_parent_dropdown">
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
        <div className="dropdown_column_2" style={{ border: "0px" }}>
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
        <div className="mobile_dropdown_column_3">
          {countryData !== null && countryIndex !== -1 && (
            <>
              <img
                src={countryData.imgUrl}
                alt={"Picture of " + countryData.name}
              />
              <div className="mobile_dropdown_column_3_div">
                <p>{countryData.text}</p>
                <Link
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  link={countryData.url}
                >
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
      <div className="mobile_menu_nav_parent_dropdown">
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
        <div className="dropdown_column_2" style={{ border: "0px" }}>
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
        <div
          className="mobile_dropdown_column_3"
          style={{ borderLeft: "1px solid #542532" }}
        >
          {knowledgeData !== null && knowledgeSubIndex !== -1 && (
            <>
              <img
                src={knowledgeData.imgUrl}
                alt={"Picture of " + knowledgeData.name}
              />
              <div className="mobile_dropdown_column_3_div">
                <p>{knowledgeData.text}</p>
                <Link
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  link={knowledgeData.url}
                >
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
      <div className="mobile_menu_nav_parent_dropdown">
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
                      <Link
                        onClick={() => {
                          setShowMenu(false);
                        }}
                        className={"dropdown_title_link"}
                        link={post.url}
                      >
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
      <div className="mobile_menu_nav_parent_dropdown">
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
                      <Link
                        onClick={() => {
                          setShowMenu(false);
                        }}
                        className={"dropdown_title_link"}
                        link={post.url}
                      >
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
      <div className="mobile_menu_nav_parent_dropdown">
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
                      <Link
                        onClick={() => {
                          setShowMenu(false);
                        }}
                        className={"dropdown_title_link"}
                        link={post.url}
                      >
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
  return (
    <div className="header_parent_1 primary_background_color secondary_bottomBorder_color hide_alt">
      <div className="mobile_menu_toggle">
        <span
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <FaBars size={20} />
        </span>
      </div>
      {showMenu && (
        <div className="header_parent_container_1">
          <div className="header_nav_parent_1">
            <div className="header_nav_container_1">
              <Link link="#home" className="header_nav_active_1">
                Home
              </Link>
              <Link link="#about" className="">
                About
              </Link>
              <span className="dropdown_link_mobile">
                <span
                  onClick={() => {
                    setDropDown("MemberStatesDropdown");
                  }}
                >
                  Member States <FaAngleDown />
                </span>
                {dropDown === "MemberStatesDropdown" && (
                  <MemberStatesDropdown />
                )}
              </span>
              <span className="dropdown_link_mobile">
                <span
                  onClick={() => {
                    setDropDown("NewsAndEventsDropdown");
                  }}
                >
                  News & Events <FaAngleDown />
                </span>
                {dropDown === "NewsAndEventsDropdown" && (
                  <NewsAndEventsDropdown />
                )}
              </span>
              <span className="dropdown_link_mobile">
                <span
                  onClick={() => {
                    setDropDown("KnowledgeStatesDropdown");
                  }}
                >
                  Knowledge <FaAngleDown />
                </span>
                {dropDown === "KnowledgeStatesDropdown" && (
                  <KnowledgeStatesDropdown />
                )}
              </span>
              <span className="dropdown_link_mobile">
                <span
                  onClick={() => {
                    setDropDown("ResourcesDropdown");
                  }}
                >
                  Resources <FaAngleDown />
                </span>
                {dropDown === "ResourcesDropdown" && <ResourcesDropdown />}
              </span>
              <span className="dropdown_link_mobile">
                <span
                  onClick={() => {
                    setDropDown("GetInvolvedDropdown");
                  }}
                >
                  Get Involved <FaAngleDown />
                </span>
                {dropDown === "GetInvolvedDropdown" && <GetInvolvedDropdown />}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(MobileMenu);
