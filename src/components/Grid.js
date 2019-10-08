import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Col = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`

export { Row, Col }
