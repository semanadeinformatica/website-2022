import React from "react"
import Container from "react-bootstrap/Container"

import Participant from "./participant"

import PanelStyles from "../../styles/session/panel.module.css"

const Participants = ({ participants }) => (
  <div className={PanelStyles.wrapper}>
    <Container className={PanelStyles.container}>
      {participants.map((participant, index) => (
        <Participant
          key={participant.name}
          participant={participant}
          color={index % 2 === 0 ? 1 : 0}
        />
      ))}
    </Container>
  </div>
)

export default Participants
