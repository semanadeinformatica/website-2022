import React from "react";
import Col from "react-bootstrap/Col";
import ActivitiesStyle from "../../styles/activities/activities.module.css";

const Item = ({ description }) => {
  return (
    <Col md="3" xs="12" className="position-relative">
      <div className={ActivitiesStyle.itemContainer}>
        <img
          className={ActivitiesStyle.squareItem}
          src={require("../../images/competition/first.png")}
          height="280px"
          width="280px"
          alt="Prize"
        />
      </div>
    </Col>
  );
};

export default Item;
