import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Col = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`

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
    }
  `)

  return (
    <section className="section-sponsors" id="sponsors">
      <div className="contain">
        <div className="vessel cols">
          <div className="left">
            <h2>Sponsors</h2>
          </div>
          <div className="right">
            <Row>
              <Col>
                <h3>Platinum Sponsor</h3>
                <Img fluid={data.spdigital.childImageSharp.fluid} />
              </Col>
              <Col>
                <h3>Silver Sponsor</h3>
                <Img fluid={data.microsoft.childImageSharp.fluid} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  )
}
