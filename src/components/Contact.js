import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (
    <Container>
         <h2>CONTACT</h2>
        <img src="/images/quiz.png" alt=""/>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  padding-top: 10vw;

  h2 {
    font-size: 40px;
    text-decoration: underline;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 4px;
    text-underline-offset: 8px;
 }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`