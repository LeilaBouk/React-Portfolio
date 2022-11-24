import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
    <h2>FOOTER</h2>
   {/* <img src="/images/quiz.png" alt=""/> */}
</Container>
  )
}

export default Footer

const Container = styled.div`
  margin-top: 10vw;
  background: red;

  h2 {
    font-size: 40px;
    text-decoration: underline;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 4px;
    text-underline-offset: 8px;
 }
`