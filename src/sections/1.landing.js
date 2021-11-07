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
              {`=> `}Event has ended.
              <code className="prompt">
                {`=> `}
                Thank you for attending geekcamp Singapore 2021 virtually at gather.town.
                See you again next time!
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
