import React from "react";
//SVG's
import SinfLogo from "../../images/svg/logo2.svg";
import InstaIcon from "../../images/svg/instagram.svg";
import LinkedinIcon from "../../images/svg/linkedin.svg";
import FacebookIcon from "../../images/svg/facebook.svg";
import MailIcon from "../../images/svg/mail.svg";
import LocationIcon from "../../images/svg/location.svg";

import FooterStyles from "../../styles/common/footer.module.css";

const links = [
  {
    // INSTAGRAM
    icon: <InstaIcon />,
    href: "https://instagram.com/sinffeup"
  },
  {
    // LINKEDIN
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/company/sinffeup/"
  },
  {
    // FACEBOOK
    icon: <FacebookIcon />,
    href: "https://facebook.com/sinfFEUP"
  },
  {
    // EMAIL
    icon: <MailIcon />,
    href: "mailto:geral@sinf.pt"
  }
];

const Footer = ({ darkMode }) => (
  <div class={FooterStyles.footerContainer}>
    <div class={FooterStyles.topLayer}>
      <div class={FooterStyles.social}>
        <div class={FooterStyles.icon_links}>
          {links.map(({ icon, href }, index) => (
            <a
              href={href}
              className={FooterStyles.icon_link}
              key={index}
              rel="noopener noreferrer"
              target="_blank"
            >
              {icon}
            </a>
          ))}
        </div>
        <div className={FooterStyles.location}>
          <LocationIcon className={FooterStyles.location_icon} />
          <div>
            <p>FEUP</p>
            <p>R. Dr. Roberto Frias 4200-465 Porto, Portugal</p>
          </div>
        </div>
      </div>
      <SinfLogo className={FooterStyles.logo} />
    </div>
    <div className={`py-2 py-sm-3 text-center`}>
      Copyright © 2022 niaefeup, todos os direitos reservados
    </div>
  </div>
);

export default Footer;
