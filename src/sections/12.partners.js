import React from "react"
import { Row, Col } from "../components/Grid"
import engineersSg from "../../static/images/partners/engineers.sg.png"
import engineersSg_2x from "../../static/images/partners/engineers.sg@2x.png"
import geekcamp from "../../static/images/partners/geekcamp.png"
import geekcamp_2x from "../../static/images/partners/geekcamp@2x.png"
import geekhacking from "../../static/images/partners/geekhacking.png"
import geekhacking_2x from "../../static/images/partners/geekhacking@2x.png"
import goSg from "../../static/images/partners/go.sg.png"
import goSg_2x from "../../static/images/partners/go.sg@2x.png"
import hackerspace from "../../static/images/partners/hackerspace.png"
import hackerspace_2x from "../../static/images/partners/hackerspace@2x.png"
import python from "../../static/images/partners/python.png"
import python_2x from "../../static/images/partners/python@2x.png"
import rubySg from "../../static/images/partners/ruby.sg.png"
import rubySg_2x from "../../static/images/partners/ruby.sg@2x.png"
import singaporecss from "../../static/images/partners/singaporecss.png"
import singaporecss_2x from "../../static/images/partners/singaporecss@2x.png"
import singaporejs from "../../static/images/partners/singaporejs.png"
import singaporejs_2x from "../../static/images/partners/singaporejs@2x.png"

const partners = [
  {
    name: "Engineers.SG",
    images: [engineersSg, engineersSg_2x],
    link: "https://engineers.sg/",
  },
  {
    name: "GeeksHacking",
    images: [geekhacking, geekhacking_2x],
    link: "https://geekshacking.com",
  },
  {
    name: "GoSG",
    images: [goSg, goSg_2x],
    link: "https://www.meetup.com/golangsg/",
  },
  {
    name: "HackerspaceSG",
    images: [hackerspace, hackerspace_2x],
    link: "https://hackerspace.sg/",
  },
  {
    name: "PUGS",
    images: [python, python_2x],
    link: "https://pugs.org.sg/",
  },
  {
    name: "RubySG",
    images: [rubySg, rubySg_2x],
    link: "https://ruby.sg/",
  },
  {
    name: "SingaporeCSS",
    images: [singaporecss, singaporecss_2x],
    link: "https://github.com/SingaporeCSS/talk.css",
  },
  {
    name: "SingaporeJS",
    images: [singaporejs, singaporejs_2x],
    link: "https://www.meetup.com/Singapore-JS/",
  },
]

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
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;

              @media screen and (min-width: 768px) {
                grid-template-columns: 1fr 1fr 1fr;
              }

              @media screen and (min-width: 960px) {
                grid-template-columns: 1fr 1fr 1fr 1fr;
              }

              img {
                margin: 0;
              }
            `}
          >
            {partners.map(({ name, images: [img1x, img2x], link }) => (
              <a key={name} href={link}>
                <img src={img1x} alt={name} srcSet={`${img2x} 2x`} />
              </a>
            ))}
          </section>
        </div>
      </div>
    </div>
  </section>
)
