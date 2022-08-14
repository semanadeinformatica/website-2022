import React from "react"
import classnames from "classnames"
import Img from "gatsby-image"

import OverlayStyles from "../../styles/utils/overlay.module.css"

const colors = [
  OverlayStyles.bg1,
  OverlayStyles.bg2,
  OverlayStyles.bg3,
  OverlayStyles.bg4,
]

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
    <div
      className={
        OverlayStyles.main_overlay +
        " " +
        OverlayStyles.overlay +
        " " +
        colors[color]
      }
    >
      {main}
    </div>
    <div
      className={
        OverlayStyles.color_overlay +
        " " +
        OverlayStyles.overlay +
        " " +
        colors[color]
      }
    ></div>
  </div>
)

export default MemberOverlay
