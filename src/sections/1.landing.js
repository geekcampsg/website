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
                <i className="c-b">"</i>GeekcampSG 2020 Online
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
                <i className="c-b">"</i>2020-09-19T14:00
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`       `}
                <i className="c-b">"</i>
                <i className="c-y">end</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>2020-09-19T18:00
                <i className="c-b">"</i>
                <i className="c-g">,</i>
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
                <i className="c-b">"</i>2020-09-20T14:00
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`       `}
                <i className="c-b">"</i>
                <i className="c-y">end</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">"</i>2020-09-20T18:00
                <i className="c-b">"</i>
                <i className="c-g">,</i>
              </code>
              <code>
                {`    `}
                <i className="c-g">{`}`},</i>
              </code>
              <code>
                {`  `}
                <i className="c-g">{`}`},</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-r">location</i>
                <i className="c-b">"</i>
                <i className="c-g">:</i>
                <i className="c-b">"</i>Online
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
                <i>geek talks.</i>
                <i className="c-b">"</i>
              </code>
              <code>
                {`  `}
                <i className="c-b">"</i>
                <i className="c-y">Registration</i>
                <i className="c-b">"</i>
                <i className="c-g">: </i>
                <i className="c-b">
                  "
                  <a
                    href="https://www.eventbrite.sg/e/geekcamp-singapore-2020-tickets-118585914663?fbclid=IwAR1JbM3AjAIMMrpF5oQhsuvdgdrMh8-gEvxjccYzXU5mFGgzkPzbciHmzso"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Register here
                  </a>
                </i>
                <i className="c-b">"</i>
                <i className="c-g">,</i>
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
