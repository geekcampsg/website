import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Figure = styled.figure`
  background: #ddd;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    background: red;
    height: 75%;
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    background: linear-gradient(rgba(240, 207, 97, 0), rgba(43, 41, 45, 0.8));
  }

  figcaption {
    position: absolute;
    bottom: 0;
    z-index: 2;
    padding: 0 0.6rem 0.6rem;
    color: #fff;
    text-transform: uppercase;
    font-size: ${props => (props.past ? ".888888889rem" : "1.5rem")};
    line-height: 1;
    font-family: "Staatliches", "Franklin Gothic Medium", "Arial Narrow", Arial;

    @media screen and (min-width: 768px) {
      padding: 0 1.5rem 1rem;
      font-size: 1.888888889rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 2.333333rem;
    }
  }

  span {
    display: block;
    font-size: 1.333333333rem;
  }

  ${props =>
    props.portrait &&
    `
      padding-bottom: 150%;
    `}
`

export default ({ name, portrait, past = false, position = "", ...props }) => (
  <Figure past={past} portrait={portrait}>
    <Img
      alt={name}
      style={{ position: "absolute", width: "100%", height: "100%" }}
      {...props}
    />
    {name && (
      <figcaption>
        {name}
        {position && <span>{position}</span>}
      </figcaption>
    )}
  </Figure>
)
