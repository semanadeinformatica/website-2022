import React from "react";

import SEO from "../components/common/seo";
import * as SoonStyles from "../styles/soon.module.css";
import Brevemente from "../components/brevemente/brevemente";
import Info from "../components/brevemente/info";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "../images/svg/logo_sinf_comp.inline.svg";

const IndexPage = () => (
  <div className={SoonStyles.background}>
    <SEO title="Coming Soon" />
    <Brevemente />

    <Container fluid className={SoonStyles.content_container}>
      <Row className={SoonStyles.top_row}>
        <Col>
          <Icon alt="Logo" className={SoonStyles.logo} />
        </Col>
      </Row>
      <Row className={SoonStyles.bottom_row}>
        <Col>
          <Info />
        </Col>
      </Row>
    </Container>
  </div>
);

export default IndexPage;
