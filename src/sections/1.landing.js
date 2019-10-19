import React, { useState } from "react"
import styled from "styled-components"

import Header from "../components/header"
import Console from "../components/console"
import Terminal from "../components/terminal"
import Game from "../components/game"

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
  @media screen and (min-width: 768px) {
    padding: 1.7rem;
  }
`

export default ({ title }) => {
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
                <i className="c-b">"</i>GeekcampSG 2019
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-y">startDate</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>2019-10-19T08:30
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-y">endDate</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>2019-10-19T18:15
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-r">location</i>
                <i className="c-b">"</i>
                <i className="c-g">: {`{`}</i>
              </code>
              <code>
                {`    `}
                <i className="c-b">"</i>
                <i className="c-r">name</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>Shaw Foundation Alumni House, NUS
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`    `}
                <i className="c-b">"</i>
                <i className="c-r">address</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>Auditorium Level 2
                <i className="c-g">,</i>
              </code>
              <code>
                {`      `}
                <i>
                  11 Kent Ridge Drive<i className="c-g">,</i> Singapore 119244
                </i>
                <i className="c-b">"</i>
              </code>
              <code>
                {`  `}
                <i className="c-g">{`}`}</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-g">description</i>
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
          </Console>
        )}
        <Terminal
          handleToggleGame={showGame => {
            setToggleGame(showGame)
          }}
        />
      </Main>
    </LandingSection>
  )
}
