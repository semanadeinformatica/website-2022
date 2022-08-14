import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ticketsStyles from "../../styles/mainpage/tickets.module.css";

const Tickets = () => (
  <section id="tickets" className={ticketsStyles.section}>
    <Container>
      <div
        className={`border border-5 border-white px-2 py-4 ${ticketsStyles.CountdownContainer}`}
      >
        <Row>
          <Col>
            <Row className={`h1 ${`h1 ${ticketsStyles.CountdownRow}`}`}>03</Row>
            <Row className={`h4 ${ticketsStyles.CountdownRow}`}>Dias</Row>
          </Col>

          <Col>
            <Row className={`h1 ${ticketsStyles.CountdownRow}`}>08</Row>
            <Row className={`h4 ${ticketsStyles.CountdownRow}`}>Palestras</Row>
          </Col>

          <Col>
            <Row className={`h1 ${ticketsStyles.CountdownRow}`}>02</Row>
            <Row className={`h4 ${ticketsStyles.CountdownRow}`}>Workshops</Row>
          </Col>

          <Col>
            <Row className={`h1 ${ticketsStyles.CountdownRow}`}>04</Row>
            <Row className={`h4 ${ticketsStyles.CountdownRow}`}>Painéis</Row>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <a
            className={ticketsStyles.signUp}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.eventbrite.pt/e/bilhetes-semana-de-informatica-2021-205684105697"
          >
            Inscrições aqui!
          </a>
        </Row>
      </div>
    </Container>
  </section>
);

export default Tickets;
