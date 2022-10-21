import React from "react";
import Countdown from "./countdown/countdown";
import Container from "react-bootstrap/Container";
import * as ticketsStyles from "../../styles/mainpage/tickets.module.css";

const Tickets = () => (
  <section className={ticketsStyles.section}>
    <a class="anchor" id="tickets"></a>
    <Container>
      <Countdown>
        <a
          className={ticketsStyles.signUp}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.eventbrite.pt/e/bilhetes-sinf-2022-semana-de-informatica-438681085937"
        >
          INSCREVE-TE AQUI!
        </a>
      </Countdown>
    </Container>
  </section>
);

export default Tickets;
