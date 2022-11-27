import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'

function About() {
  return (
    <Container id="about">
         <h2>ABOUT</h2>
         <Wrap>
        <img src="/images/pfp.gif" alt=""/>
        <p>
        Leila Boukella is an Algerian-American illustrator based in Phoenix, Arizona. She graduated with a BFA in illustration from the School of Visual Arts in New York. 
She specializes in creating appealing characters and artwork that can attract audiences of all ages.
Online she goes by the name Lariatel, and runs an Instagram account called "Lariatel Explorers" which focuses on 6 original characters.
She can be contacted at Lariatel.art@gmail.com for any art related inquiries.
        </p>
        </Wrap>
    </Container>
  )
}

export default About

const Container = styled.div`
  // margin-top: 10vw;
  background: ${Palette.skyfade};
  background-image: url("/images/roses.png");
  background-size: cover;

  h2 {
    padding-top: 15vw;
    margin-bottom: 70px;
    font-size: 40px;
    text-decoration: underline;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 4px;
    text-underline-offset: 8px;
 }

`

const Wrap = styled.div`

display: flex;
padding-bottom: 80px;

img {
  width: 30%;
  height: 30%;
  margin: 10px 0px 10px 100px;
  border-radius: 3px;
}

p {
  margin: 10px 100px 10px 100px;
  font-size: 20px;
  background: white;
  color: #273748;
  padding: 20px;
  border-radius: 3px;
}
`