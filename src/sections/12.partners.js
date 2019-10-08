import React from "react"
import { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "../components/Grid"
import nushackers from "../../static/images/partners/nushackers.svg"
import twelvegeeks from "../../static/images/partners/12geeks.png"
import junction from "../../static/images/partners/junction-x-singapore.png"
import engineerssg from "../../static/images/partners/engineerssg.svg"
import womenwhocode from "../../static/images/partners/womenwhocode.png"
import osilayer8 from "../../static/images/partners/osi-layer8.svg"

export default () => (
  <section className="section-partners" id="partners">
    <div className="contain">
      <div className="vessel cols">
        <div className="left">
          <h2>Partners</h2>
        </div>
        <div className="right">
          <section
            className="partners"
            css={`
              ${Col} {
                padding: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              img {
                width: 100%;
              }
            `}
          >
            <Row>
              <Col>
                <img alt="NUS Hackers" src={nushackers} />
              </Col>
              <Col>
                <img alt="12 Geeks" src={twelvegeeks} />
              </Col>
              <Col>
                <img alt="Junction X Singapore" src={junction} />
              </Col>
            </Row>
            <Row>
              <Col>
                <img alt="Engineers.g" src={engineerssg} />
              </Col>
              <Col>
                <img alt="Women Who Code" src={womenwhocode} />
              </Col>
              <Col>
                <img alt="OSI Layer 8" src={osilayer8} />
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </div>
  </section>
)
