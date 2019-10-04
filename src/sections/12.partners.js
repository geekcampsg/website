import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "../components/Grid"

export default () => (
  <section className="section-partners" id="partners">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>Partners</h2>
        </div>
        <div className="right">
          <section className="partners">
            <Row>
              <Col>
                par
                {/* <Img fluid={data.spdigital.childImageSharp.fluid} /> */}
              </Col>
              <Col>
                pat
                {/* <Img fluid={data.microsoft.childImageSharp.fluid} /> */}
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </div>
  </section>
)
