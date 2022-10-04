import React from "react";
import classnames from "classnames";
import Img from "gatsby-image";

import OverlayStyles from "../../styles/utils/overlay.module.css";

const MemberOverlay = ({ main, secondary, image, color, border }) => (
  <div
    className={classnames(
      OverlayStyles.container,
      border && OverlayStyles.frame
    )}
  >
    <Img fluid={image} className={OverlayStyles.image} />
    <div
      className={OverlayStyles.secondary_overlay + " " + OverlayStyles.overlay}
    >
      {secondary ? (
        secondary
      ) : (
        <div className={OverlayStyles.secondaryFiller}></div>
      )}
    </div>
    <div className={`${OverlayStyles.main_overlay} ${OverlayStyles.overlay}`}>
      {main}
    </div>
    <div
      className={`${OverlayStyles.color_overlay} ${OverlayStyles.overlay}`}
    ></div>
  </div>
);

export default MemberOverlay;
