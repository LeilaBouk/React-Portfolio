import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'
import { Fonts } from './Fonts'

function Footer() {
  return (
    <Container>
    <h4>Email + Social Media</h4>
    <a href="mailto:leila.boukella@gmail.com">
   <img src="./images/mail.png" alt=""/>
   </a>
    <a href="https://www.linkedin.com/in/leila-boukella-7b2742226/" target="blank">
   <img src="./images/linkedin.png" alt=""/>
   </a>
   <a href="https://github.com/LeilaBouk" target="blank">
   <img src="./images/github.png" alt=""/>
   </a>
   <a href="https://www.instagram.com/lariatel/" target="blank">
   <img src="./images/insta.png" alt=""/>
   </a>
   {/* <img src="./images/insta.png" alt=""/> */}
</Container>
  )
}

export default Footer

const Container = styled.div`
  background: ${Palette.dark};
  padding: 50px;
  font-family: ${Fonts.main};

  img {
    max-width: 60px;
    padding: 20px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    filter: brightness(0.8);

    &:hover {
      filter: brightness(1.4);
    }
  }

  h4 {
    font-size: 10px;
    text-decoration: underline;
    color: ${Palette.grey};
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 4px;
    text-underline-offset: 8px;
    cursor: default;
 }
`