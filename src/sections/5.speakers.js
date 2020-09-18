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
      adrienne: file(
        relativePath: { eq: "speakers/featured/adrienne_atacke.jpg" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      jiayi: file(relativePath: { eq: "speakers/featured/chong_jia_yi.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      isham: file(relativePath: { eq: "speakers/featured/isham_mohamed.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      juan: file(
        relativePath: { eq: "speakers/featured/juan_antonio_araya.jpg" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tamas: file(relativePath: { eq: "speakers/featured/tamas_piros.png" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ahmed: file(relativePath: { eq: "speakers/featured/ahmed_hazyl.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      kenneth: file(
        relativePath: { eq: "speakers/featured/kennethytlim.jpg" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      siddhant: file(relativePath: { eq: "speakers/featured/siddhant.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400, cropFocus: NORTH) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      marcus: file(relativePath: { eq: "speakers/featured/marcusliyuan.jpg" }) {
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
              2020
              <br /> Speakers
            </h2>
          </div>
          <div className="right">
            <Grid>
              <SpeakerImage
                name="Chong Jia Yi"
                position="Distinguished Engineer, GovTech"
                fixed={data.jiayi.childImageSharp.fixed}
                target="speaker-chong-jia-yi"
              />
              <SpeakerImage
                name="Adrienne Tacke"
                position="Senior Developer Advocate, MongoDB"
                fixed={data.adrienne.childImageSharp.fixed}
                target="speaker-adrienne-tacke"
              />
              <SpeakerImage
                name="Isham Mohammed"
                position="Lead Software Developer, Kloudynet Technologies"
                fixed={data.isham.childImageSharp.fixed}
                target="speaker-isham-mohammed"
              />
              <SpeakerImage
                name="Juan Araya"
                position="Cybersecurity Specialist"
                fixed={data.juan.childImageSharp.fixed}
                target="speaker-juan-araya"
              />
              <SpeakerImage
                name="Tamas Piros"
                position="Google Developer Expert in Web Tech"
                fixed={data.tamas.childImageSharp.fixed}
                target="speaker-tamas-piros"
              />
              <SpeakerImage
                name="Kennth Y T Lim"
                position="Research Scientist, NIE"
                fixed={data.kenneth.childImageSharp.fixed}
                target="speaker-kenneth-yt-lim-ahmed"
              />
              <SpeakerImage
                name="Ahmed Hazyl Hilmy"
                position="Passion for AR, virtual worlds & IoT for authentic learning"
                fixed={data.ahmed.childImageSharp.fixed}
                target="speaker-kenneth-yt-lim-ahmed"
              />
              <SpeakerImage
                name="Tan Li Yuan, Marcus"
                position="Undergraduate of ISTD, Computer Science at SUTD"
                fixed={data.marcus.childImageSharp.fixed}
                target="speaker-tan-li-yuan-marcus-siddhant"
              />
              <SpeakerImage
                name="Siddhant Shrivastava"
                position="Emerging Tech Researcher at iTrust Centre for Research in Cyber Security, SUTD"
                fixed={data.siddhant.childImageSharp.fixed}
                target="speaker-tan-li-yuan-marcus-siddhant"
              />
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}
