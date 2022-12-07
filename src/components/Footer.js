import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'

function Footer() {
  return (
    <Container>
    {/* <h2>FOOTER</h2> */}
    <a href="https://www.linkedin.com/in/leila-boukella-7b2742226/" target="blank">
   <img src="./images/linkedin.png" alt=""/>
   </a>
   <a href="https://github.com/LeilaBouk" target="blank">
   <img src="./images/github.png" alt=""/>
   </a>
   {/* <img src="/images/insta.png" alt=""/> */}
</Container>
  )
}

export default Footer

const Container = styled.div`
  background: ${Palette.dark};
  padding: 50px;

  img {
    max-width: 70px;
    padding: 20px;
  }

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