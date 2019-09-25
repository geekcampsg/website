import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SpeakerImage from "../components/SpeakerImage"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
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
    <section className="section-past-speakers" id="past-speakers">
      <div className="contain">
        <div className="vessel cols">
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
                position="Minister"
                fixed={data.vivian.childImageSharp.fixed}
                past
              />
              <SpeakerImage
                portrait
                name="Sebastiaan Deckers"
                position="Staff Software Engineer, Zendesk"
                objectPosition="0% 0%"
                past
                fixed={data.sebastiaan.childImageSharp.fixed}
              />
              <SpeakerImage
                portrait
                name="Michelle Lye"
                position="Product Manager, AIS Cube"
                fixed={data.michelle.childImageSharp.fixed}
                past
              />
              <SpeakerImage
                portrait
                name="Omer Iqbal"
                position="iOS Dev, SEA"
                fixed={data.omer.childImageSharp.fixed}
                past
              />
              <SpeakerImage
                portrait
                name="Bunnie Huang"
                position="Hacker, Bunnie Studios"
                fixed={data.bunnie.childImageSharp.fixed}
                past
              />
              <SpeakerImage
                portrait
                position="VP of Software, The Intelligent Warehouse"
                name="Melvin Zhang"
                fixed={data.melvin.childImageSharp.fixed}
                past
              />
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}
