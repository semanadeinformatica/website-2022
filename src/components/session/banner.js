import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BannerStyles from "../../styles/session/banner.module.css";

const Banner = ({ title }) => (
  <>
    <div className={BannerStyles.bannerBackground}></div>
  </>
);

export default Banner;
