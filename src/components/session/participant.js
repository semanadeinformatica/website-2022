import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PanelStyles from "../../styles/session/panel.module.css";
import Hover3d from "../utils/hover3d";

const Participant = ({ participant, color }) => (
  <Row className={PanelStyles.participant}>
    <Col lg="4" md="5">
      <Hover3d
        img={participant.img.childImageSharp.fluid}
        data={participant}
        border
        size={250}
      />
    </Col>
    <Col lg="8" md="7">
      <h3 className={PanelStyles.who}>
        <span className={PanelStyles.name}>{participant.name}</span> @{" "}
        {participant.occupations[0].where}
      </h3>
      <p className={PanelStyles.role}>{participant.role}</p>
      <p className={PanelStyles.bio}>{participant.bio}</p>
    </Col>
  </Row>
);

export default Participant;
