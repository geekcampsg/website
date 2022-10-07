import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { Row, Col } from "../components/Grid"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      spdigital: file(relativePath: { eq: "sponsors/spdigital.png" }) {
	    ...sponsor
      }
      microsoft: file(relativePath: { eq: "sponsors/microsoft.png" }) {
	    ...sponsor
      }
      shopify: file(relativePath: { eq: "sponsors/shopify.png" }) {
	    ...sponsor
      }
      prolive: file(relativePath: { eq: "sponsors/prolive.jpg" }) {
	    ...sponsor
      }
    }
    fragment sponsor on File {
      childImageSharp {
	    gatsbyImageData(height: 300, placeholder: BLURRED)
      }
    }
  `)

const spdigitalImage = getImage(data.spdigital.childImageSharp);
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
                  href="https://www.spdigital.sg"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GatsbyImage image={spdigitalImage} />
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  )
}
