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
            <Console.Controls subTitle="geekcamp@sg~online" />
            <Console.Code>
              {`=> `}We're online
              <code className="prompt">
                {`=> `}
                geekcamp Singapore 2021 will be held virtually on the first
                weekend of November. Registration is{" "}
                <a
                  href="https://www.eventbrite.sg/e/geekcamp-singapore-2021-tickets-159282338763"
                  target="_blank"
                  rel="noreferrer"
                >
                  open
                </a>
                !
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
