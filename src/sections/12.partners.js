import React from "react"
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
          </section>
        </div>
      </div>
    </div>
  </section>
)
