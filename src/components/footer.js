import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <Link to="/about/">About</Link>&nbsp;<Link to="/schedule/">Schedule</Link>
    &nbsp;
    <a href="https://www.instagram.com/yogawithpaz/" target="_new">
      Instagram
    </a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
