import React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import styled from "styled-components"

function SpeakerLink({ target, children }) {
  if (target) return <a href={`#${target}`}>{children}</a>
  return <>{children}</>
}

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
    font-size: ${(props) => (props.past ? ".888888889rem" : "1.5rem")};
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
    font-size: 0.625rem;
    @media screen and (min-width: 375px) {
      font-size: 0.75rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  ${(props) =>
    props.portrait &&
    `
      padding-bottom: 150%;
    `}
`

export default ({
  target,
  name,
  portrait,
  past = false,
  position = "",
  ...props
}) => {
	const image = getImage(props.image);
	return (
  <SpeakerLink target={target}>
    <Figure past={past} portrait={portrait}>
      <GatsbyImage
        alt={name}
        style={{ position: "absolute", width: "100%", height: "100%" }}
        {...props}
		image={image}
      />
      {name && (
        <figcaption>
          {name}
          {position && <span>{position}</span>}
        </figcaption>
      )}
    </Figure>
  </SpeakerLink>
)
}
