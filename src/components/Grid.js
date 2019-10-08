import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`

const Col = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`

export { Row, Col }
