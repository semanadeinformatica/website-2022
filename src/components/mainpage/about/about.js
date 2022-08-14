import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AboutStyles from "../../../styles/mainpage/about.module.css";
import mainStyles from "../../../styles/mainpage/mainpage.module.css";
import Countdown from "../countdown/countdown";

const About = () => {
  return (
    <div id="sobre-nos">
      <div className={AboutStyles.aboutContainer}>
        <Container>
          <h2 className={mainStyles.h2}>
            Sobre nós
            <hr className={mainStyles.headingLine} />
          </h2>
          <Row className="mt-5">
            <Col xs="12" lg="6">
              <p>
                A Semana de Informática (SINF), organizada pelo Núcleo de
                Informática da Associação de Estudantes da Faculdade de
                Engenharia da Universidade do Porto (
                <a
                  href="https://ni.fe.up.pt/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  NIAEFEUP
                </a>
                ), foi criada com o intuito de permitir aos estudantes,
                independentemente do curso, desenvolver as suas capacidades nas
                diversas áreas da Informática, promovendo a sua interação com o
                mundo empresarial através de eventos sociais.
              </p>
            </Col>
            <Col xs="12" lg="6">
              <p>
                A edição de 2021 decorre entre os dias 15 a 17 de novembro, em
                modo <em>híbrido</em>. Os participantes têm a seu dispor
                palestras e workshops onde entrarão em contacto com diversas
                tecnologias e conceitos que não intervêm no percurso académico,
                focando-se portanto nas skills técnicas, assim como um pitch e
                sessões de entrevistas, fomentando o seu contacto com empresas
                de topo a nível nacional e internacional, podendo desenvolver as
                suas soft skills.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
