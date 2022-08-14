import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import BannerStyles from "../../styles/session/banner.module.css"

const Banner = ({ title }) => (
  <div className={BannerStyles.bannerContainer}>
    <Container>
      <Row>
        <Col
          xs="12"
          md={{ size: 8, offset: 4 }}
          className={BannerStyles.titleContainer}
        >
          <h1 className={BannerStyles.title}>
            {title}
            <hr className={BannerStyles.underline} />
          </h1>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Banner
