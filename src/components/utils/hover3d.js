import React, { useEffect, useRef } from "react";
import Img from "gatsby-image";
import VanillaTilt from "vanilla-tilt";
import * as Hover3dStyles from "../../styles/utils/hover3d.module.css";
import "../../styles/utils/hover3d_override.css";

import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
  FaTwitter,
  FaGlobe
} from "react-icons/fa";

const options = {
  scale: 1.105,
  speed: 1000,
  max: 15,
  glare: true
};

const LinkList = ({ linkedin, github, website, twitter, instagram }) => (
  <div className={Hover3dStyles.links}>
    {linkedin ? (
      <a href={linkedin} className={Hover3dStyles.link}>
        <FaLinkedin />
      </a>
    ) : (
      ""
    )}
    {github ? (
      <a href={github} className={Hover3dStyles.link}>
        <FaGithubSquare />
      </a>
    ) : (
      ""
    )}
    {website ? (
      <a href={website} className={Hover3dStyles.link}>
        <FaGlobe />
      </a>
    ) : (
      ""
    )}
    {instagram ? (
      <a href={instagram} className={Hover3dStyles.link}>
        <FaInstagram />
      </a>
    ) : (
      ""
    )}
    {twitter ? (
      <a href={twitter} className={Hover3dStyles.link}>
        <FaTwitter />
      </a>
    ) : (
      ""
    )}
  </div>
);

const Hover3d = ({ data, border = false, size = 210 }) => {
  const { name, linkedin, github, website, twitter, instagram, img } = data;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  //TODO: SET BLUE BORDER
  return (
    <div
      ref={tilt}
      className={Hover3dStyles.tilt_container}
      style={{
        height: size + "px",
        width: size + "px",
        border: border ? "5px solid var(--color4)" : ""
      }}
    >
      <Img
        fluid={img.childImageSharp.fluid}
        style={{ borderRadius: "10px", height: "100%" }}
      />
      <LinkList linkedin={linkedin} website={website} github={github} />
      <h5 className={Hover3dStyles.name}>{name}</h5>
    </div>
  );
};

export default Hover3d;
