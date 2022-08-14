import React from "react";

import FooterStyles from "../../styles/common/footer.module.css";

const Footer = ({ darkMode }) => (
  <div
    className={`${FooterStyles.footerContainer} ${
      darkMode ? FooterStyles.dark : FooterStyles.light
    } py-2 py-sm-3 text-center`}
  >
    Copyright © 2021 niaefeup, todos os direitos reservados
  </div>
);

export default Footer;
