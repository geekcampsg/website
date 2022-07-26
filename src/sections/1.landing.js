import React, { useState } from "react"
import styled from "styled-components"

import Header from "../components/header"
import Console from "../components/console"
import Terminal from "../components/terminal"
import Game from "../components/game"

const LandingSection = styled.section`
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
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 1.7rem;
  }
`

const Landing = ({ title }) => {
  const [toggleGame, setToggleGame] = useState(false)
  return (
    <LandingSection className="contain">
      <HeadeOuter>
        <Header />
      </HeadeOuter>
      <Main>
        {toggleGame ? (
          <Game />
        ) : (
          <Console>
            <Console.Controls subTitle="geekcamp@sg" />
            <Console.Code>
			              <code>
                <i className="c-g">{`{`}</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-y">title</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>GeekcampSG 2022
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-y">date</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>2022-10-29
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-r">inPersonLocation</i>
                <i className="c-b">"</i>
                <i className="c-g">:</i>
                <i className="c-b">"</i>To be confirmed
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-r">onlineLocation</i>
                <i className="c-b">"</i>
                <i className="c-g">:</i>
                <i className="c-b">"</i>Discord, YouTube
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-r">registration</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>Opening sooon
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-r">cfp</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i><a href="https://www.papercall.io/geekcamppsg2022">https://www.papercall.io/geekcamppsg2022</a>
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-y">description</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>Join us for an eventful day of
              </code>
              <code>
                {`    `}
                <i>geek talks.</i>
                <i className="c-b">"</i>
              </code>
              <code>
                <i className="c-g">{`}`}</i>
              </code>
            </Console.Code>
            <Terminal
              handleToggleGame={(showGame) => {
                setToggleGame(showGame)
              }}
            />
          </Console>
        )}
      </Main>
    </LandingSection>
  )
}

export default Landing
