import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "../components/Grid"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      spdigital: file(relativePath: { eq: "sponsors/spdigital.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      microsoft: file(relativePath: { eq: "sponsors/microsoft.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shopify: file(relativePath: { eq: "sponsors/shopify.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="section-sponsors" id="sponsors">
      <div className="contain">
        <div className="vessel cols">
          <div className="left">
            <h2>Sponsors</h2>
          </div>
          <div
            className="right"
            css={`
              @media screen and (min-width: 768px) {
                ${Col} {
                  max-width: 500px;
                }
              }
            `}
          >
            <Row css="@media screen and (min-width: 768px) {margin-bottom: 3rem;}">
              <Col>
                <h3>Platinum Sponsor</h3>
                <a
                  href="https://www.spdigital.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Img fluid={data.spdigital.childImageSharp.fluid} />
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Gold Sponsor</h3>
                <a
                  href="https://www.shopify.com/careers/search?locations%5B%5D=43&keywords=&sort="
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Img fluid={data.shopify.childImageSharp.fluid} />
                </a>
              </Col>
              <Col>
                <h3>Silver Sponsor</h3>
                <a
                  href="https://www.facebook.com/MicrosoftSG/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Img fluid={data.microsoft.childImageSharp.fluid} />
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  )
}
