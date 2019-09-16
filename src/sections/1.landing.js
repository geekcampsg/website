import React, { useContext } from "react"
import styled from "styled-components"

import Header from "../components/header"
import Console from "../components/console"
import Terminal from "../components/terminal"
import SiteContext from "../components/siteContext"

const LandingSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const HeadeOuter = styled.div`
  position: relative;
`

const Main = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  i {
    font-style: normal;
  }
  .c-y {
    color: var(--yellow);
  }
  .c-b {
    color: var(--blue);
  }
  .c-r {
    color: var(--red);
  }
  .c-g {
    color: var(--green);
  }
  .codeblock {
    display: block;
  }
  .codeblock.s-1 {
    margin-left: 2ch;
  }
  .codeblock.s-2 {
    margin-left: 4ch;
  }
  .codeblock.s-3 {
    margin-left: 6ch;
  }
  @media screen and (min-width: 768px) {
    padding: 1.7rem;
    .codeblock.codeblock {
      display: inline;
      margin-left: 0;
    }
  }
`

export default ({ title }) => {
  const data = useContext(SiteContext)
  return (
    <LandingSection className="contain">
      <HeadeOuter>
        <Header siteTitle={data.site.siteMetadata.title} />
      </HeadeOuter>
      <Main>
        <Console>
          <Console.Controls />
          <Console.Code lineNumbers>
            <code>
              <i className="c-g">{`{`}</i>
            </code>
            <code>
              {`  `}
              <i className="c-b">"</i>
              <i className="c-y">title</i>
              <i className="c-b">"</i>
              <i className="c-g">: </i>
              <div className="codeblock s-2">
                <i className="c-b">"</i>GeekcampSG 2019
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </div>
            </code>
            <code>
              {`  `}
              <i className="c-b">"</i>
              <i className="c-y">startDate</i>
              <i className="c-b">"</i>
              <i className="c-g">: </i>
              <div className="codeblock s-2">
                <i className="c-b">"</i>2019-10-19T08:30
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </div>
            </code>
            <code>
              {`  `}
              <i className="c-b">"</i>
              <i className="c-y">endDate</i>
              <i className="c-b">"</i>
              <i className="c-g">: </i>
              <div className="codeblock s-2">
                <i className="c-b">"</i>2019-10-19T18:15
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </div>
            </code>
            <code>
              {`  `}
              <i className="c-b">"</i>
              <i className="c-r">location</i>
              <i className="c-b">"</i>
              <i className="c-g">: </i>
              <i className="c-b">"</i>
              <i className="c-r">{`TBA`}</i>
              <i className="c-b">"</i>
              <i className="c-g">,</i>
            </code>
            <code>
              {`  `}
              <i className="c-b">"</i>
              <i className="c-g">description</i>
              <i className="c-b">"</i>
              <i className="c-g">: </i>
              <div className="codeblock s-2">
                <i className="c-b">"</i>Join us for an eventful day of geek
                talks.
              </div>
              <i className="c-b">"</i>
            </code>
            <code>
              <i className="c-g">{`}`}</i>
            </code>
          </Console.Code>
        </Console>
        <Terminal />
      </Main>
    </LandingSection>
  )
}
