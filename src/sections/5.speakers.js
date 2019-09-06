import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SpeakerImage from "../components/SpeakerImage"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      michael: file(
        relativePath: { eq: "speakers/featured/michael_cheng.jpeg" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hazwan: file(
        relativePath: { eq: "speakers/featured/muhammad_hazwan.jpg" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sausheong: file(relativePath: { eq: "speakers/featured/sausheong.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      subh: file(
        relativePath: { eq: "speakers/featured/subhransu_behera.jpg" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className="section-speakers" id="speakers">
      <div className="contain">
        <div className="vessel cols">
          <div className="left">
            <h2>
              Featured
              <br /> 2019
              <br /> Speakers
            </h2>
          </div>
          <div className="right">
            <Grid>
              <SpeakerImage
                name="Chang Sau Sheong"
                fixed={data.sausheong.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Subhransu Behera"
                fixed={data.subh.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Muhammad Hazwan"
                fixed={data.hazwan.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Michael Cheng"
                fixed={data.michael.childImageSharp.fixed}
              />
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}
