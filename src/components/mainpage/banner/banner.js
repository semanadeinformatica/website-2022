import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Icon from "../../../images/svg/logo_sinf_comp.inline.svg";
import BannerStyles from "../../../styles/mainpage/banner.module.css";
import { useShowcaseImages } from "../../hooks/showcase-query";
import BasicInfo from "./basic-info";

const Banner = () => {
  const data = useShowcaseImages();

  return (
    <div className={BannerStyles.banner}>
      <Icon className={BannerStyles.logo} />
      <div className={BannerStyles.info_wrapper}>
        <BasicInfo />
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
            <img
              src={pic.node.childImageSharp.fluid.src}
              alt="Participantes em edições anteriores da SINF"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
