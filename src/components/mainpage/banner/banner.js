import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Background from "../../../images/gradient-cover-background.png";
import Icon from "../../../images/svg/logo_sinf_comp.inline.svg";
import BannerStyles from "../../../styles/mainpage/banner.module.css";
import { useShowcaseImages } from "../../hooks/showcase-query";
import BasicInfo from "./basic-info";

const Banner = () => {
  const data = useShowcaseImages();

  return (
    <div className={BannerStyles.banner}>
      <Icon className={BannerStyles.icon} />
      <div className={BannerStyles.basic_info}>
        <BasicInfo />
      </div>
      <Carousel
        indicators={false}
        controls={false}
        fade={true}
        keyboard={false}
        pause={false}
        touch={false}
        interval={99999999999}
        className="bg-primary"
      >
        {data.allFile.edges.map(pic => (
          <Carousel.Item
            className={[
              BannerStyles.carouselItem,
              BannerStyles.carouselFade
            ].join(" ")}
            key={pic.node.id}
          >
            <img src={Background} alt="Background" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
