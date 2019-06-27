import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo-icon";
import "./styles/header.css"

const Header = ({ siteTitle }) => (
  <header className="Nav">
    <h1 className="flex-line">
      <Logo />
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
