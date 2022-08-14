import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
// import {
//   FaEnvelope,
//   FaLinkedin,
//   FaFacebookSquare,
//   FaInstagramSquare
// } from "react-icons/fa";

import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram
} from "react-icons/ai";

import { BsEnvelope } from "react-icons/bs";

import { GoLocation } from "react-icons/go";

import ContactStyles from "../../../styles/mainpage/contacts.module.css";
import mainStyles from "../../../styles/mainpage/mainpage.module.css";

const links = [
  {
    icon: <AiOutlineLinkedin />,
    href: "https://www.linkedin.com/company/sinffeup/",
    text: "sinffeup"
  },
  {
    icon: <BsEnvelope />,
    href: "mailto:geral@sinf.pt",
    text: "geral@sinf.pt"
  },
  {
    icon: <AiOutlineFacebook />,
    href: "https://facebook.com/sinfFEUP",
    text: "sinffeup"
  },
  {
    icon: <AiOutlineInstagram />,
    href: "https://instagram.com/sinfFEUP",
    text: "sinffeup"
  },
  {
    icon: <GoLocation />,
    href: "https://facebook.com/sinfFEUP",
    text: "FEUP, R. Dr. Roberto Frias. 4200-465, Porto - Portugal"
  }
];

const Contacts = () => (
  <Col className={ContactStyles.title_container}>
    <h2 className={mainStyles.h2}>
      Contactos <hr className={mainStyles.headingLine} />
    </h2>
    <Container>
      <div className={ContactStyles.linkContainer}>
        {links.map((link, index) => (
          <a
            href={link.href}
            className={ContactStyles.link}
            style={
              ({ justifySelf: index % 2 === 0 ? "start" : "end" },
              { float: "left" })
            }
            key={`link-${index}`}
          >
            <span className={ContactStyles.icon}>{link.icon}</span>
            <span className="h5">{link.text}</span>
          </a>
        ))}
      </div>
    </Container>
  </Col>
);

export default Contacts;
