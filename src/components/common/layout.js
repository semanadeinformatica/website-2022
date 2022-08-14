/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import Footer from "./footer"

import Utils from "../../styles/utils/utils.module.css"
import layoutStyles from "../../styles/common/layout.module.css"

const Layout = ({ children, darkFooter }) => (
  <div className={layoutStyles.wrapper}>
    <div className={layoutStyles.content}>
      <div className={Utils.sticky}>
        <Navbar logo />
      </div>
      <main>{children}</main>
    </div>

    <Footer darkMode={darkFooter} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  darkFooter: PropTypes.bool,
}

Layout.defaultProps = {
  darkFooter: false,
}

export default Layout
