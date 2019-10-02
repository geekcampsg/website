import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../images/geekcamp-logo.svg"
import Button from "./Button"

const StyledHeader = styled.header`
  padding-top: 1.5rem;
  text-align: center;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin: 0;
  }

  img {
    margin-bottom: 0;
    max-width: 60%;
  }

  @media screen and (min-width: 481px) {
    padding-top: 2rem;
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    img {
      max-width: none;
    }
  }
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryHeader {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <StyledHeader className="vessel">
      <h1 className="logo">
        <Link to="/">
          <img src={Logo} alt={data.site.siteMetadata.title} />
        </Link>
      </h1>
      <Button
        href="https://geekcampsg2019.eventbrite.sg"
        target="_blank"
        rel="noreferrer noopener"
      >
        Register now
      </Button>
    </StyledHeader>
  )
}

export default Header
