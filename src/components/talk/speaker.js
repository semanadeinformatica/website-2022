import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SpeakerFrame from "./speaker_frame"
import SpeakerName from "./speaker_name"

import SpeakerStyles from "../../styles/talk/speaker.module.css"

const Speaker = ({ data }) => {
  return (
    <Container className={SpeakerStyles.container} fluid>
      <div className={SpeakerStyles.id_container}>
        <Row className={SpeakerStyles.id_wrapper}>
          <Col className={SpeakerStyles.frame}>
            <SpeakerFrame {...data} />
          </Col>
          <Col className={SpeakerStyles.name}>
            <SpeakerName {...data} />
            <p className={SpeakerStyles.bio}>{data.bio}</p>
          </Col>
        </Row>
      </div>

      <div className={SpeakerStyles.mb_id_container}>
        <div className={SpeakerStyles.mb_blue}>
          <SpeakerName {...data} />
          <SpeakerFrame {...data} />
        </div>
        <p className={SpeakerStyles.bio}>{data.bio}</p>
      </div>
    </Container>
  )
}

export default Speaker
