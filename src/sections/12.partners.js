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
              a {
                flex: 1;
              }
              img {
                display: block;
                width: 100%;
              }
            `}
          >
            <Row>
              <Col>
                <a
                  href="https://www.nushackers.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img alt="NUS Hackers" src={nushackers} />
                </a>
              </Col>
              <Col>
                <a
                  href="https://12geeks.com/community/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img alt="12Geeks" src={twelvegeeks} />
                </a>
              </Col>
              <Col>
                <a
                  href="https://singapore.hackjunction.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img alt="Junction X Singapore" src={junction} />
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <a
                  href="https://engineers.sg/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img alt="Engineers.sg" src={engineerssg} />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.womenwhocode.com/singapore"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img alt="Women Who Code Singapore" src={womenwhocode} />
                </a>
              </Col>
              <Col>
                <a
                  href="https://osilayer8.makerforce.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img alt="OSI Layer 8" src={osilayer8} />
                </a>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </div>
  </section>
)
