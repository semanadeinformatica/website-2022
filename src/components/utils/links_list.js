import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithubSquare
} from "react-icons/fa";
import WebIcon from "../../images/svg/web_icon.inline.svg";

import LinkStyles from "../../styles/utils/link_list.module.css";

const LinksList = ({ linkedin, twitter, github, website, instagram }) => (
  <div className={LinkStyles.links}>
    {linkedin ? (
      <a href={linkedin} className={LinkStyles.link}>
        <FaLinkedin />
      </a>
    ) : (
      ""
    )}
    {instagram ? (
      <a href={instagram} className={LinkStyles.link}>
        <FaInstagram />
      </a>
    ) : (
      ""
    )}
    {twitter ? (
      <a href={twitter} className={LinkStyles.link}>
        <FaTwitter />
      </a>
    ) : (
      ""
    )}
    {github ? (
      <a href={github} className={LinkStyles.link}>
        <FaGithubSquare />
      </a>
    ) : (
      ""
    )}
    {website ? (
      <a href={website} className={LinkStyles.link}>
        <WebIcon className={LinkStyles.webIcon} />
      </a>
    ) : (
      ""
    )}
  </div>
);

export default LinksList;
