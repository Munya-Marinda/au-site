import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMediaIcons = ({ state }) => {
  return (
    <div className="topbar_socialLinks_parent_1">
      <Link link="#twitter" className="twitter_icon_parent_1">
        <FaTwitter color="white" />
      </Link>
      <Link link="#facebook" className="facebook_icon_parent_1">
        <FaFacebookF color="white" />
      </Link>
      <Link link="#youtube" className="youtube_icon_parent_1">
        <FaYoutube color="white" />
      </Link>
      <Link link="#linkedIn" className="linkedIn_icon_parent_1">
        <FaLinkedinIn color="white" />
      </Link>
    </div>
  );
};

export default connect(SocialMediaIcons);
