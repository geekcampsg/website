import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "../images/geekcamp-logo.svg"

const StyledHeader = styled.header`
  padding-top: 1.5rem;
  text-align: center;
  left: 0;
  width: 100%;

  img {
    margin-bottom: 0;
    max-width: 60%;
  }

  @media screen and (min-width: 481px) {
    padding-top: 2rem;
  }
  @media screen and (min-width: 768px) {
    padding-top: 3rem;
    text-align: left;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader className="vessel">
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <img src={Logo} alt={siteTitle} />
      </Link>
    </h1>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
