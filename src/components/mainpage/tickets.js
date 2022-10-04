import React from "react";
import Countdown from "./countdown/countdown";
import Container from "react-bootstrap/Container";
import ticketsStyles from "../../styles/mainpage/tickets.module.css";

const Tickets = () => (
  <section className={ticketsStyles.section}>
    <a class="anchor" id="tickets"></a>
    <Container>
      <div>
        <Countdown />
      </div>
      <div>
        <a
          className={ticketsStyles.signUp}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.eventbrite.pt/e/bilhetes-semana-de-informatica-2021-205684105697"
        >
          INSCREVE-TE AQUI!
        </a>
      </div>
    </Container>
  </section>
);

export default Tickets;
