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
      kenrick: file(relativePath: { eq: "speakers/featured/kenrick.jpeg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      renaldi: file(
        relativePath: { eq: "speakers/featured/Renaldi-Gondosubroto.png" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yos: file(relativePath: { eq: "speakers/featured/yosss.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sudharshan: file(
        relativePath: { eq: "speakers/featured/Sudharshan.jpeg" }
      ) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      weiyuan: file(relativePath: { eq: "speakers/featured/weiyuan.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dipesh: file(relativePath: { eq: "speakers/featured/dipesh.jpg" }) {
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
              2019
              <br /> Speakers
            </h2>
          </div>
          <div className="right">
            <Grid>
              <SpeakerImage
                name="Chang Sau Sheong"
                position="CEO, SP Digital"
                fixed={data.sausheong.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Kenrick"
                position="Front-End Engineer, Shopee"
                fixed={data.kenrick.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Renaldi Gondosubroto"
                position="Founder and CEO, GReS Studio"
                fixed={data.renaldi.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Hazwan Hassan"
                position="Cyber Security Enthusiast"
                fixed={data.hazwan.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Subhransu Behera"
                position="Principal Software Engineer, SP Digital"
                fixed={data.subh.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Yos Riady"
                position="Software Engineer, TenX"
                fixed={data.yos.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Sudharshan"
                position="Hacker, Maker, Coder, Tech-Enthusiast"
                fixed={data.sudharshan.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Liu Weiyuan"
                position="Full Stack Engineer, Rakuten Viki"
                fixed={data.weiyuan.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Dipesh Monga"
                position="Tech Speaker, Mozilla"
                fixed={data.dipesh.childImageSharp.fixed}
              />
              <SpeakerImage
                name="Michael Cheng"
                position="Lead Engineer, GovTech"
                fixed={data.michael.childImageSharp.fixed}
              />
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}
