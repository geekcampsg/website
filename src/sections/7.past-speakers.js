import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SpeakerImage from "../components/SpeakerImage"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      vivian: file(
        relativePath: { eq: "speakers/past/dr_vivian_balakrishnan.jpg" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      michelle: file(relativePath: { eq: "speakers/past/michelle_lye.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      omer: file(relativePath: { eq: "speakers/past/omer_iqbal.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sebastiaan: file(
        relativePath: { eq: "speakers/past/sebastiaan_deckers.jpg" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bunnie: file(relativePath: { eq: "speakers/past/bunnie_huang.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      melvin: file(relativePath: { eq: "speakers/past/melvin_zhang.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section className="section-past-speakers">
      <div className="contain">
        <div className="vessel cols cols--alt">
          <div className="left">
            <h2>
              Our Past <br /> Speakers
            </h2>
          </div>
          <div className="right">
            <Grid>
              <SpeakerImage
                portrait
                name="Dr Vivian Balakrishnan"
                fixed={data.vivian.childImageSharp.fixed}
              />
              <SpeakerImage
                portrait
                name="Sebastiaan Deckers"
                objectPosition="0% 0%"
                fixed={data.sebastiaan.childImageSharp.fixed}
              />
              <SpeakerImage
                portrait
                name="Michelle Lye"
                fixed={data.michelle.childImageSharp.fixed}
              />
              <SpeakerImage
                portrait
                name="Omer Iqbal"
                fixed={data.omer.childImageSharp.fixed}
              />
              <SpeakerImage
                portrait
                name="Bunnie Huang"
                fixed={data.bunnie.childImageSharp.fixed}
              />
              <SpeakerImage
                portrait
                name="Melvin Zhang"
                fixed={data.melvin.childImageSharp.fixed}
              />
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}
