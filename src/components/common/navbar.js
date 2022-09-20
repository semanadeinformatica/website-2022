import { Link } from "gatsby";
import React from "react";
import { NavItem, NavLink } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/svg/logo_sinf_simp.inline.svg";
import NavbarStyles from "../../styles/common/navbar.module.css";

const NavWrapper = ({ links, className, closeDrawer, children }) => (
  <Nav className={`${className}`}>
    {links.map(({ internal, url, text }) => (
      <Nav.Item className="px-2" key={text}>
        {internal ? (
          <Link
            className={`nav-link ${NavbarStyles.navLink}`}
            activeClassName={NavbarStyles.navLinkActive}
            to={url}
            onClick={closeDrawer}
          >
            {text}
          </Link>
        ) : (
          <Nav.Link className={NavbarStyles.navLink} href={url}>
            {text}
          </Nav.Link>
        )}
      </Nav.Item>
    ))}
    {children}
  </Nav>
);

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.fixed = props.fixed;
    this.transparent = props.transparent;
    this.logo = props.logo;
    this.state = {
      isOpen: false
    };

    this.leftLinks = [
      {
        url: "/#sobre-nos",
        text: "Sobre nós",
        internal: true
      },
      {
        url: "/#speakers",
        text: "Speakers",
        internal: true
      },
      {
        url: "/#tickets",
        text: "Bilhetes",
        internal: true
      },
      {
        url: "/#sponsors",
        text: "Sponsors",
        internal: true
      },
      {
        url: "/#contactos",
        text: "Contactos",
        internal: true
      }
    ];

    this.rightLinks = [
      {
        url: "https://ctf.sinf.pt",
        text: "CTF",
        internal: false
      },
      {
        url: "/programa",
        text: "Programa",
        internal: true
      },
      {
        url: "/equipa",
        text: "Equipa",
        internal: true
      },
      {
        url: "/competicao-programacao",
        text: "Competição",
        internal: true
      }
    ];

    this.pastEditions = [
      { url: "https://2020.sinf.pt", year: "2020" },
      { url: "https://2019.sinf.pt", year: "2019" },
      { url: "https://2018.sinf.pt", year: "2018" }
    ];
  }

  closeDrawer = () => {
    this.setState({
      isOpen: false
    });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar
          fixed={this.fixed ? "top" : ""}
          expand="lg"
          className={`py-0 ${NavbarStyles.navbar} ${
            this.transparent && !this.state.isOpen
              ? NavbarStyles.noBackground
              : `py-2`
          }`}
        >
          <Navbar.Collapse className="w-100 order-1 order-lg-0 dual-collapse2">
            <NavWrapper
              className={`${NavbarStyles.background} ml-0 align-items-center`}
              links={this.leftLinks}
              closeDrawer={this.closeDrawer}
            />
          </Navbar.Collapse>
          {this.logo || this.state.isOpen ? (
            <Link className="navbar-brand mx-auto order-0" to="/">
              <Logo fill="#000" className={NavbarStyles.logo} />
            </Link>
          ) : (
            ""
          )}
          <Navbar.Collapse className="w-100 order-3 dual-collapse2 flex-row-reverse">
            <NavWrapper
              className={`${NavbarStyles.background} align-items-center`}
              links={this.rightLinks}
              closeDrawer={this.closeDrawer}
            >
              <Dropdown as={NavItem}>
                <Dropdown.Toggle
                  as={NavLink}
                  className={`${NavbarStyles.navLink} ps-1`}
                >
                  &nbsp;Edições anteriores
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.pastEditions.map(({ url, year }) => (
                    <Dropdown.Item
                      key={year}
                      href={url}
                      className={`${NavbarStyles.dropdownLink}`}
                    >
                      {year}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </NavWrapper>
          </Navbar.Collapse>
          <Navbar.Toggle
            className={`${NavbarStyles.toggler}`}
            onClick={this.toggle}
          />
        </Navbar>
      </div>
    );
  }
}
