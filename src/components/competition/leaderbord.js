import React from "react";

import * as CompetitionStyles from "../../styles/competition/competition.module.css";

import * as LeaderbordStyles from "../../styles/competition/leaderbord.module.css";

const Leaderbord = ({ title, image }) => {
  return (
    <div className="pl-0 mt-4">
      <p className={LeaderbordStyles.leaderbordText}>{title}</p>
      <img src={image} alt="Rank" className={CompetitionStyles.winnersImage} />
    </div>
  );
};

export default Leaderbord;
