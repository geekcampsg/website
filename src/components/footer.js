import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/geekcamp-logo-light.svg"

const Footer = styled.footer`
  background: #282a35;
  color: #fff;
  padding: 3.555555556rem 0;

  .copyright {
    font-size: 1rem;
  }

  .branding {
    text-align: center;
  }
`

const Inner = styled.div`
  h4 {
    white-space: nowrap;
  }
  > div {
    margin-bottom: 2rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: #fff;
  }

  .branding {
    margin: 3rem 0 calc(1.45rem / 2) auto;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: start;
    flex-wrap: wrap;

    & > div {
      margin-right: 4rem;
    }

    .copyright {
      text-align: left;
      white-space: nowrap;
    }
    .branding {
      margin-top: 1rem;
    }
  }
`

export default ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryFooter {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Footer>
      <div className="contain">
        <Inner className="vessel">
          <div style={{ flexBasis: "25%" }}>
            <h4 style={{ color: "var(--red)" }}>Register Tickets</h4>
            <p>
              Register now to sign up for the conference. It’s on the house for
              everyone.
            </p>
          </div>
          <div>
            <h4 style={{ color: "var(--yellow)" }}>Geekcamp SG</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/GeekcampSG/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/geekcamp"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://join.slack.com/t/geekcampattendees/shared_invite/enQtNzM3MDc0ODM1MDYxLWEzODZjZjliMzFlMjhmNzMwZjUwYTc1NTUwZDY4NmQ1MmVmODI4NGNhMmVlODhjNTBiZWFiYzU4MGYxYzRmNjI"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Slack
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GeekcampSG/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "var(--green)" }}>Archives</h4>
            <ul>
              <li>
                <Link to="/past-events">Past Events</Link>
              </li>
              <li>
                <a
                  href="https://engineers.sg/episodes/search?search=GeekcampSG"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Recordings
                </a>
              </li>
            </ul>
          </div>
          <div className="branding">
            <img src={Logo} alt={data.site.siteMetadata.title} />
            <div className="copyright">
              Copyright &copy; 2019. All rights reserved.
            </div>
          </div>
        </Inner>
      </div>
    </Footer>
  )
}
