import { Link } from "gatsby";
import React from "react";
import { NavLink, NavDropdown } from "react-bootstrap";
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

/*TODO: Tudo fodido aqui*/
const DropdownButton = ({ items, name }) => (
  <Dropdown title={name}>
    <div style={{ position: "relative", width: "fit-content" }}>
      <Dropdown.Toggle className={NavbarStyles.dropdownHeader}>
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark" className={NavbarStyles.dropdownChild}>
        {items.map(({ name, url }) => (
          <Dropdown.Item
            key={name}
            href={url}
            className={`${NavbarStyles.dropdownLink}`}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </div>
  </Dropdown>
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

    this.links = [
      {
        url: "/#sobre-nos",
        text: "Sobre nós"
      },
      {
        url: "/#speakers",
        text: "Speakers"
      },
      {
        url: "/#tickets",
        text: "Bilhetes"
      },
      {
        url: "/#sponsors",
        text: "Sponsors"
      },
      {
        url: "/#contactos",
        text: "Contactos"
      },
      {
        url: "/programa",
        text: "Programa"
      },
      {
        url: "/equipa",
        text: "Equipa"
      }
    ];

    this.pastEditions = [
      { url: "https://2020.sinf.pt", name: "2020" },
      { url: "https://2019.sinf.pt", name: "2019" },
      { url: "https://2018.sinf.pt", name: "2018" }
    ];

    this.ativities = [
      { name: "Palestras", url: "https://2020.sinf.pt" },
      { name: "CTF", url: "https://2020.sinf.pt" },
      { name: "Workshops", url: "https://2020.sinf.pt" },
      { name: "Competição", url: "https://2020.sinf.pt" }
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
          className={`${NavbarStyles.navbar}`}
        >
          <div className={NavbarStyles.topBanner}>
            {this.logo || this.state.isOpen ? (
              <Link className="navbar-brand order-0" to="/">
                <Logo fill="#000" className={NavbarStyles.logo} />
              </Link>
            ) : (
              ""
            )}

            <div className={NavbarStyles.otherLinks}>
              <DropdownButton items={this.ativities} name="Atividades" />
              <DropdownButton
                items={this.pastEditions}
                name="Edições Anteriores"
              />
            </div>

            {/*
            <NavWrapper
                className={`${NavbarStyles.background} align-items-center`}
                links={this.rightLinks}
                closeDrawer={this.closeDrawer}
              >
                <DropdownButton items={this.ativities} name="Atividades" />
                <DropdownButton items={this.pastEditions} name="Edições anteriores" />

              </NavWrapper>*/}
          </div>

          <div className={NavbarStyles.navigation}>
            {this.links.map(({ url, text }) => (
              <Nav.Link className={NavbarStyles.navLink} href={url}>
                {text}
              </Nav.Link>
            ))}
          </div>
        </Navbar>
      </div>
    );
  }
}
