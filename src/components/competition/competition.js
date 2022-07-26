import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Prize from "../competition/prize";
import Participate from "../utils/participate";
import Leaderbord from "./leaderbord";

import * as CompetitionStyles from "../../styles/competition/competition.module.css";
import Icon from "../../images/svg/logo-outline-white.inline.svg";

import * as mainStyles from "../../styles/mainpage/mainpage.module.css";
import * as ParticipateStyles from "../../styles/utils/participate.module.css";
import OpenSoon from "../utils/open_soon";

import Prize1 from "../../images/competition/first.png";
import Prize2 from "../../images/competition/second.png";
import Prize3 from "../../images/competition/third.png";
import Default from "../../images/svg/suprise_block.png";
import Rank from "../../images/competition/winners.png";

const Competition = () => (
  <div className={CompetitionStyles.competitionPage}>
    {/* <Container className={CompetitionStyles.competitionContainer}>
      <Row>
        <Col
          xs="12"
          className={CompetitionStyles.competitionText + " my-4 py-5"}
        >
          Participa na nossa Competição de Programação e habilita-te a ganhar 3
          fantásticos prémios! Fica atento aos 6 desafios, de crescente
          dificuldade, que vamos lançar para seres o mais rápido. No entanto, a
          rapidez não é tudo pelo que tens de ser também o melhor a resolver os
          desafios.
          <br />
          <br />
          Não percas a Sessão de Encerramento, onde serão anunciados os
          vencedores e será feita a entrega de prémios.
          <br />
          <br />A participação é voluntária e individual e aberta a todos os
          participantes da Semana de Informática.
        </Col>
      </Row>
    </Container> */}
    <Container>
      <Row className={CompetitionStyles.prizeSquares}>
        <Prize
          type="first"
          title="Nintendo Switch"
          description=""
          image={Default}
        />
        <Prize
          type="second"
          title="Headphones Bluetooth Sony"
          description=""
          image={Default}
        />
        <Prize
          type="third"
          title="Cartão oferta Fnac 100€"
          description=""
          image={Default}
        />
      </Row>
    </Container>
    <div className={CompetitionStyles.conditions}>
      <Container>
        <div className={CompetitionStyles.conditions_container + " pt-4"}>
          <Row>
            <Col className={CompetitionStyles.conditionsHeader}>
              <Icon />
              <h2 className={mainStyles.h2}>Regulamento</h2>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className={CompetitionStyles.conditionList}>
              <ul>
                <li>
                  A competição terá início dia 30 de outubro às 21h30,
                  decorrendo durante os 3 próximos dias até dia 2 de novembro às
                  15:00.
                </li>
                <li>
                  A competição decorrerrá online, através da plataforma
                  HackerRank.
                </li>
                <li>
                  Serão lançados diariamente 2 novos desafios, nos dias 30, 31 e
                  1 de novembro às 21h30.
                </li>
                <li>
                  Apenas estarás habilitado aos prémios caso tenhas tenhas
                  realizado inscrição nas sessões webinar da SINF (por favor
                  garante que utilizas o mesmo endereço de email em ambas as
                  plataformas).
                </li>
                <li>
                  Os vencedores serão anunciados na Sessão de Encerramento, e a
                  organização contactá-los-á para combinar a entrega dos
                  prémios.
                </li>
                <li>
                  A cópia de código é estritamente proibida, sendo esta
                  monitorizada pela própria plataforma HackerRank.
                </li>
                <li>
                  A pontuação em cada exercício será influenciada pela qualidade
                  da solução, sendo o factor de desempate o tempo demorado a
                  submeter a resolução.
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    {
      <Container>
        <Leaderbord title="Leaderbord" image={Rank} />
      </Container>
    }
    {
      <Participate link="http://www.hackerrank.com/sinf22-programming-contest">
        <p className={ParticipateStyles.participateText}>Vamos a isto?</p>
      </Participate>
    }
  </div>
);

export default Competition;
