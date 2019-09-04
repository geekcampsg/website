import styled from "styled-components"

const Button = styled.a`
  background: var(--blue);
  color: #fff;
  text-transform: uppercase;
  border-radius: 0.444444444rem;
  display: inline-block;
  line-height: 3.111111111rem;
  padding: 0 1.222222222rem;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`

export default Button
