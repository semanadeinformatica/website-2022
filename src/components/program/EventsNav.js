import React from "react";
import Nav from "react-bootstrap/Nav";

import * as programStyles from "../../styles/program/program.module.css";

const EventsNav = ({ toggle, activeTab }) => (
  <Nav className="justify-content-center">
    <Nav.Item>
      <Nav.Link
        onClick={() => toggle("talks")}
        className={
          activeTab === "talks"
            ? [programStyles.innerTab, programStyles.active].join(" ")
            : programStyles.innerTab
        }
        eventKey="talks"
      >
        Palestras
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link
        onClick={() => toggle("activities")}
        eventKey="activities"
        className={
          activeTab === "activities"
            ? [programStyles.innerTab, programStyles.active].join(" ")
            : programStyles.innerTab
        }
      >
        Atividades
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default EventsNav;
