import React from "react";
import SpeakerNameStyles from "../../styles/talk/speaker_name.module.css";

const Occupations = ({ occupations }) => {
  return (
    <div className={SpeakerNameStyles.occupation}>
      {occupations.map((occupation, index) => {
        return (
          <p key={occupation.what}>
            {occupation.what}
            {" @ "}
            {occupation.where}
          </p>
        );
      })}
    </div>
  );
};

export default Occupations;
