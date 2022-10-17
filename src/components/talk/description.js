import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "./link";

import DescriptionStyles from "../../styles/talk/description.module.css";

const calculateDay = date => {
  const oneDay = 24 * 60 * 60 * 1000;
  let first_day = new Date("October 31, 2022");
  let day = new Date(date);
  return (
    Math.round(Math.abs((day.getTime() - first_day.getTime()) / oneDay)) + 1
  );
};

const Description = ({ data, children }) => {
  return (
    <Row className={DescriptionStyles.row}>
      <Col>
        <Container className={DescriptionStyles.container}>
          <h2 className={DescriptionStyles.title}>
            {data.type + ": " + data.title}
          </h2>
          <Row className={DescriptionStyles.info_container}>
            <Col className={DescriptionStyles.date}>
              <div>Dia {calculateDay(data.date)}</div>
              <div>{data.start_time}</div>
              <div>{data.day}</div>
            </Col>
            <Col>
              {children}
              {data.link && <Link link={data.link} />}
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Description;
