import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SEO from "../components/common/seo";
import Layout from "../components/common/layout";

import Banner from "../components/mainpage/banner/banner";
import About from "../components/mainpage/about/about";
import Activities from "../components/mainpage/activities/activities";
import Tickets from "../components/mainpage/tickets";
import Sponsors from "../components/mainpage/sponsors/sponsors";
import Contacts from "../components/mainpage/contacts/wrapper";
import { Container, Row, Col } from "react-bootstrap";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Layout>
      <Banner />
      <About />
      <Activities />
      <Tickets />
      <Sponsors />
      {/* <Container fluid>
        <Row xs={1} lg={2}>
          <Col>
            <Contacts />
          </Col>
          <Col>
            <iframe
              title="Google Maps Embed - FEUP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.991054366161!2d-8.598039448909118!3d41.178362316787975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246446d48922a3%3A0x8b1e4a0bcdacc840!2sFEUP%20-%20Faculdade%20de%20Engenharia%20da%20Universidade%20do%20Porto!5e0!3m2!1spt-PT!2spt!4v1635203694377!5m2!1spt-PT!2spt"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container> */}
    </Layout>
  </div>
);
export default IndexPage;
