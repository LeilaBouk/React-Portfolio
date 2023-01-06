import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'
import { Fonts } from './Fonts'

function Welcome() {
  return (
    <Container>
      <img src="./images/elementsa.png" alt="" className="f"/>
      <img src="./images/space1.png" alt="" className="g"/>
      <img src="./images/stars2.png" alt="" className="c"/>
      <img src="./images/stars1.png" alt="" className="e"/>
    <h1>Leila Boukella | Front-End Dev</h1>
    </Container>
  )
}

export default Welcome

const Container = styled.div`
// background-image: url("./images/spacetest.jpg");
background-size:auto 100%;
height: 700px;
display: flex;
position: relative;
align-items: center;
transform-style: preserve-3d;
z-index: -1;
flex-wrap: wrap;
justify-content: center; 

img {
  position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
}

.a {
  transform: translateZ(-10px) scale(2);
}

.b {
  transform: translateZ(-5px) scale(1.5);
}

.c {
  transform: translateZ(-1px);
}

.d {
  transform: translateZ(-3px);
}

.e {
  transform: translateZ(-5px) scale(1);
}

.f {
  transform: translateZ(-10px) scale(2);
}

.g {
  transform: translateZ(-5px) scale(2);
}

.h {
  transform: translateZ(-10px) scale(2);
}

h1 {
  color: white;
  font-family: ${Fonts.main};
  font-size: 40px;
}

`
