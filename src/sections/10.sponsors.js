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
      prolive: file(relativePath: { eq: "sponsors/prolive.jpg" }) {
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
            <h2>Sponsor</h2>
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
                <a
                  href="https://prolive.co"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Img fluid={data.prolive.childImageSharp.fluid} />
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  )
}
