import React from "react";
import Col from "react-bootstrap/Col";

import CompetitionStyles from "../../styles/competition/competition.module.css";

const Prize = ({ type, description, title }) => {
  let prizeName, prizeStyle;
  if (type === "first")
    [prizeName, prizeStyle] = ["1º prémio", CompetitionStyles.prizeFirst];
  else if (type === "second")
    [prizeName, prizeStyle] = ["2º prémio", CompetitionStyles.prizeSecond];
  else [prizeName, prizeStyle] = ["3º prémio", CompetitionStyles.prizeThird];

  return (
    <Col
      md="3"
      xs="12"
      className={[CompetitionStyles.prize, prizeStyle].join(" ")}
    >
      <div className="pl-0">
        <img
          className={CompetitionStyles.squarePrize}
          src={require("../../images/competition/" + type + ".png")}
          height="280px"
          width="280px"
          alt="Prize"
        />
      </div>
      <div className={CompetitionStyles.prizeType}>{prizeName}</div>
      <div className={CompetitionStyles.prizeTitle}>{title}</div>
      <div className={CompetitionStyles.prizeDescription}>{description}</div>
    </Col>
  );
};

export default Prize;
