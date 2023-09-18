import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { FixInvalidLink } from "../js/main";
import Modal from "react-bootstrap/Modal";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = ({ menu, _toggledleSubmitYourContentModal }) => {
  //
  //
  //
  //
  //
  //
  //
  //
  return (
    <>
      <div className="footer_parent_1">
        <div className="footer_container_1">
          <div>
            <h5 className="footer_header_1">About Agenda 2026</h5>
            <p className="footer_text_1">
              Agenda 2063 is the African Union's strategic framework for the
              socio-economic transformation of the continent over the next 50
              years. It is a bold and ambitious vision for an Africa that is
              prosperous, peaceful, integrated, and people-driven.
            </p>
          </div>
          <div>
            <h5 className="footer_header_2">Follow Us</h5>
            <SocialMediaIcons />
          </div>
          <div>
            <h5 className="footer_header_2">Opportunities</h5>
            <ul className="footer_links_ul">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div>
            <h5 className="footer_header_2">Quick Links</h5>
            <ul className="footer_links_ul">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom_parent">
        <div className="footer_bottom">
          <img
            className="header_agenda2026_logo_2"
            src="https://ambassador.daddysdeals.co.za/features/african-union-assets/agenda_2063_logo_eng-02.png"
          />

          <div>
            <span>Contact Us</span>
            <span>Cookie Policy</span>
            <span>Privacy Notice</span>
            <span>Site Terms</span>
          </div>

          <div>
            <span>Copyright Agenda 2063</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(Footer);
