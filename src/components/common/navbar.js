import { Link } from "gatsby";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/svg/logo_sinf_simp.inline.svg";
import NavbarStyles from "../../styles/common/navbar.module.css";
import { Divide as Hamburger } from "hamburger-react";

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
        url: "/#tickets",
        text: "Bilhetes"
      },
      {
        url: "/#sponsors",
        text: "Sponsors"
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
      { url: "https://2021.sinf.pt", name: "2021" },
      { url: "https://2020.sinf.pt", name: "2020" },
      { url: "https://2019.sinf.pt", name: "2019" },
      { url: "https://2018.sinf.pt", name: "2018" }
    ];

    this.ativities = [
      { name: "Palestras", url: "/programa?type=talks" },
      { name: "CTF", url: "https://ctf.sinf.pt" },
      { name: "Workshops", url: "/programa?type=activities" },
      { name: "Competição", url: "/competicao-programacao" },
      { name: "Sessão de Networking", url: "/sessions/sessao-de-networking" }
    ];
  }

  closeDrawer = () => {
    this.setState({
      isOpen: false
    });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

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

            <div className={NavbarStyles.hamburguer}>
              <Hamburger toggled={this.state.isOpen} toggle={this.toggle} />
            </div>

            <div className={NavbarStyles.otherLinks}>
              <DropdownButton items={this.ativities} name="Atividades" />
              <DropdownButton
                items={this.pastEditions}
                name="Edições Anteriores"
              />
            </div>
          </div>

          {this.state.isOpen && (
            <div className={NavbarStyles.navModal}>
              {this.links.map(({ url, text }) => (
                <Nav.Link className={NavbarStyles.navLink} href={url}>
                  {text}
                </Nav.Link>
              ))}
              <h3 class="mt-3">Atividades</h3>
              {this.ativities.map(({ name, url }) => (
                <Nav.Link className={NavbarStyles.navLink} href={url}>
                  {name}
                </Nav.Link>
              ))}
              <h3 class="mt-3">Edições Anteriores</h3>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {this.pastEditions.map(({ name, url }) => (
                  <Nav.Link className={NavbarStyles.navLink} href={url}>
                    {name}
                  </Nav.Link>
                ))}
              </div>
            </div>
          )}

          <div className={NavbarStyles.navigation}>
            {this.links.map(({ url, text }) => (
              <Link to={url} className={NavbarStyles.navLink}>
                {text}
              </Link>
            ))}
          </div>
        </Navbar>
      </div>
    );
  }
}
