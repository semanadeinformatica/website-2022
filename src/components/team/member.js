import React, { useEffect, useRef } from "react";

import Img from "gatsby-image";
import VanillaTilt from "vanilla-tilt";
import LinkStyles from "../../styles/utils/link_list.module.css";
import TeamStyles from "../../styles/team/team.module.css";
import "../../styles/team/team_override.css";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import WebIcon from "../../images/svg/web_icon.inline.svg";

const LinkList = ({ linkedin, github, website }) => (
  <div className={TeamStyles.links}>
    {linkedin ? (
      <a href={linkedin} className={TeamStyles.link}>
        <FaLinkedin />
      </a>
    ) : (
      ""
    )}
    {github ? (
      <a href={github} className={TeamStyles.link}>
        <FaGithubSquare />
      </a>
    ) : (
      ""
    )}
    {website ? (
      <a href={website} className={TeamStyles.link}>
        <WebIcon className={LinkStyles.webIcon} />
      </a>
    ) : (
      ""
    )}
  </div>
);

const options = {
  scale: 1.105,
  speed: 1000,
  max: 15,
  glare: true
};

const Member = ({ data, color }) => {
  const { name, linkedin, github, website, img } = data;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} className={TeamStyles.member_container}>
      <Img
        fluid={img.childImageSharp.fluid}
        style={{ borderRadius: "10px", height: "100%" }}
      />
      <LinkList linkedin={linkedin} website={website} github={github} />
      <h5 className={TeamStyles.member_name}>{name}</h5>
    </div>
  );
};

export default Member;
