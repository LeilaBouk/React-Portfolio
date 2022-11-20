import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container>
         <h2>ABOUT</h2>
        <img src="/images/quiz.png" alt=""/>
    </Container>
  )
}

export default About

const Container = styled.div`
  margin-top: 20vw;
  background: red;
  background-image: url("https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg");
  background-size: cover;

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