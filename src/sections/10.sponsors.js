import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Row = styled.div`
  display: flex;
`

const Col = styled.div`
  text-align: center;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      spdigital: file(relativePath: { eq: "sponsors/spdigital.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      microsoft: file(relativePath: { eq: "sponsors/microsoft.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
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
                <Img fixed={data.spdigital.childImageSharp.fixed} />
              </Col>
              <Col>
                <h3>Silver Sponsor</h3>
                <Img fixed={data.microsoft.childImageSharp.fixed} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  )
}
