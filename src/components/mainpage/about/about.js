import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as AboutStyles from "../../../styles/mainpage/about.module.css";
import * as mainStyles from "../../../styles/mainpage/mainpage.module.css";
import Icon from "../../../images/svg/logo-outline-white.inline.svg";

const About = () => {
  return (
    <div>
      <a class="anchor" id="sobre-nos"></a>
      <div className={AboutStyles.aboutContainer}>
        <Container>
          <Col className={AboutStyles.aboutHeader}>
            <Icon />
            <h2 className={mainStyles.h2}>Sobre nós</h2>
          </Col>
          <Row className="mt-5">
            <Col xs="12" lg="6">
              <p>
                A <strong>Semana de Informática</strong> (SINF),{" "}
                <strong>organizada</strong> pelo{" "}
                <strong>
                  Núcleo de Informática da Associação de Estudantes da Faculdade
                  de Engenharia da Universidade do Porto
                </strong>{" "}
                (
                <a
                  href="https://ni.fe.up.pt/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  NIAEFEUP
                </a>
                ), foi criada com o intuito de{" "}
                <strong>permitir aos estudantes</strong>, independentemente do{" "}
                curso, <strong>desenvolver</strong> as suas{" "}
                <strong>capacidades</strong> nas diversas áreas da Informática,{" "}
                promovendo a sua <strong>interação</strong> com o{" "}
                <strong>mundo empresarial</strong> através de eventos sociais.
              </p>
            </Col>
            <Col xs="12" lg="6">
              <p>
                A edição de 2022 decorre entre os dias{" "}
                <strong>31 de outubro a 2 de novembro</strong>. Os participantes{" "}
                têm a seu dispor <strong>palestras</strong> e{" "}
                <strong>workshops</strong> onde entrarão em contacto com{" "}
                diversas tecnologias e conceitos que não intervêm no percurso{" "}
                académico, focando-se portanto nas skills técnicas, assim como{" "}
                um <strong>pitch, sessões de entrevistas</strong> e{" "}
                <strong>visitas a empresas</strong>, fomentando o seu contacto{" "}
                com empresas de topo a nível nacional e internacional, podendo{" "}
                desenvolver as suas soft skills.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
