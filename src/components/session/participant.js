import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Overlay from "../utils/overlay";
import LinksList from "../utils/links_list";

import PanelStyles from "../../styles/session/panel.module.css";

const Participant = ({ participant, color }) => (
  <Row className={PanelStyles.participant}>
    <Col lg="4" md="5">
      <Overlay
        image={participant.img.childImageSharp.fluid}
        color={color}
        main={
          <LinksList
            linkedin={participant.linkedin}
            twitter={participant.twitter}
            website={participant.website}
            github={participant.github}
            instagram={participant.instagram}
          />
        }
        border
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
