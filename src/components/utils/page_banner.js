import React from "react";

import * as BannerStyles from "../../styles/utils/page_banner.module.css";

const PageBanner = ({ children }) => {
  return <div className={BannerStyles.container}>{children}</div>;
};

export default PageBanner;
