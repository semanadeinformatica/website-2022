import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Icon from "../../../images/svg/logo_sinf_comp.inline.svg";
import * as BannerStyles from "../../../styles/mainpage/banner.module.css";
import { useShowcaseImages } from "../../hooks/showcase-query";
import Img from "gatsby-image";
import BasicInfo from "./basic-info";

const Banner = () => {
  const data = useShowcaseImages();

  return (
    <div className={BannerStyles.banner}>
      <div style={{ textAlign: "center" }}>
        <Icon className={BannerStyles.logo} />
        <div className={BannerStyles.info_wrapper}>
          <BasicInfo />
        </div>
      </div>
      <Carousel
        indicators={false}
        controls={false}
        fade={true}
        keyboard={false}
        pause={false}
        touch={false}
        interval={10000}
      >
        {data.allFile.edges.map(pic => (
          <Carousel.Item
            className={BannerStyles.carousel_item}
            key={pic.node.id}
          >
            <Img
              fluid={pic.node.childImageSharp.fluid}
              alt="Participantes em edições anteriores da SINF"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
