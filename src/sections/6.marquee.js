import React from "react"
import styled from "styled-components"

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const Marquee = styled.section`
  font-size: 30vw;
  font-family: "Staatliches", "Franklin Gothic Medium", "Arial Narrow", Arial;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  color: #535b6c;
  display: flex;
  .text {
    animation: marquee 55s infinite linear both;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 14.444444444rem;
  }
`

const tags = [
  "IoT",
  "WebVR",
  "authentication",
  "WebOfThings",
  "security",
  "hardware",
  "serverless",
  "music",
  "javascript",
  "python",
  "community",
  "go",
  "science",
  "nature",
]

const shuffled = shuffle(tags)

export default () => (
  <Marquee id="marquee">
    <div className="text">{shuffled.join(".")}.</div>
    <div className="text">{shuffled.join(".")}.</div>
  </Marquee>
)
