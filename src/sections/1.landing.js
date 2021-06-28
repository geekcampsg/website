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
                <i className="c-b">"</i>GeekcampSG 2021 Online
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-y">dates</i>
                <i className="c-b">"</i>
                <i className="c-g">: {`{`}</i>
              </code>
              <code>
                {`    `}
                <i className="c-b">"</i>
                <i className="c-y">day1</i>
                <i className="c-b">"</i>
                <i className="c-g">: {`{`}</i>
              </code>
              <code>
                {`       `}
                <i className="c-b">"</i>
                <i className="c-y">start</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>2021-11-06TXX:XX
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`       `}
                <i className="c-b">"</i>
                <i className="c-y">end</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>2021-11-06TXX:XX
                <i className="c-b">"</i>
              </code>
              <code>
                {`    `}
                <i className="c-g">{`}`},</i>
              </code>
              <code>
                {`    `}
                <i className="c-b">"</i>
                <i className="c-y">day2</i>
                <i className="c-b">"</i>
                <i className="c-g">: {`{`}</i>
              </code>
              <code>
                {`       `}
                <i className="c-b">"</i>
                <i className="c-y">start</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>2021-11-07TXX:XX
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`       `}
                <i className="c-b">"</i>
                <i className="c-y">end</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>2021-11-07TXX:XX
                <i className="c-b">"</i>
              </code>
              <code>
                {`    `}
                <i className="c-g">{`}`}</i>
              </code>
              <code>
                {`  `}
                <i className="c-g">{`}`},</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-r">CFP</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"<a href="https://www.papercall.io/geekcamppsg2021" rel="noopener noreferrer" target="_blank">https://www.papercall.io/geekcamppsg2021</a></i>
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-g">description</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>Join us for 2 days of
              </code>
              <code>
                {`    `}
                <i>afternoon geek talks.</i>
                <i className="c-b">"</i>
              </code>
              <code>
                <i className="c-g">{`}`}</i>
              </code>
            </Console.Code>
          </Console>
        )}
        <Terminal
          handleToggleGame={(showGame) => {
            setToggleGame(showGame)
          }}
        />
      </Main>
    </LandingSection>
  )
}
