import React from "react";
import Img from "gatsby-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as DescriptionStyles from "../../styles/session/description.module.css";

const Description = ({
  image,
  day,
  place,
  start_time,
  end_time,
  description,
  title
}) => (
  <Container className={DescriptionStyles.descriptionContainer}>
    <Row>
      <Col xs="12" md="4">
        <div className={DescriptionStyles.logoContainer}>
          {image.childImageSharp !== null ? (
            <Img
              fluid={image.childImageSharp.fluid}
              className={DescriptionStyles.logoImg}
            />
          ) : (
            <img
              alt=""
              src={image.publicURL}
              className={DescriptionStyles.logoImg}
            />
          )}
        </div>
      </Col>
      <Col xs="12" md="8">
        <div className={DescriptionStyles.title}>
          <h1>{title}</h1>
          <div className={`separator`}></div>
        </div>

        <span className={DescriptionStyles.timePlace}>
          {day}, {start_time}-{end_time}
        </span>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className={DescriptionStyles.description}
        ></div>
      </Col>
    </Row>
  </Container>
);

export default Description;
