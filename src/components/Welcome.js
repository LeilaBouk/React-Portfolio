import React from 'react'
import styled from 'styled-components'

function Welcome() {
  return (
    <Container>
    <img src="/images/planetst1.png" alt="" className="d"/>
    <img src="/images/planetst2.png" alt="" className="c"/>
    <img src="/images/planetst3.png" alt="" className="b"/>
    <img src="/images/planetst4.png" alt="" className="a"/>
    {/* <img src="/images/spacetest.jpg" alt="" className="e"/> */}
    <h1>Welcome</h1>
    </Container>
  )
}

export default Welcome

const Container = styled.div`
// background-image: url("/images/spacetest.jpg");
background-size:auto 100%;
height: 700px;
border:100px solid #273748;
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

h1 {
  color: white;
}

`
