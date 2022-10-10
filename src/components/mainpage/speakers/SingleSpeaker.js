import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import * as speakersStyles from "../../../styles/mainpage/speakers.module.css";

const SingleSpeaker = ({ speaker, path }) => {
  return (
    <div className={speakersStyles.speaker}>
      <Img
        fluid={speaker.img.childImageSharp.fluid}
        alt={speaker.name}
        className={speakersStyles.image}
      />
      <Link to={path}>
        Ver {path.includes("talks") ? "palestra" : "workshop"}
      </Link>
    </div>
  );
};

export default SingleSpeaker;
