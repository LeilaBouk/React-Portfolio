import React from 'react'
import styled from 'styled-components'

function Welcome() {
  return (
    <Container>
    <img src="/images/planetst1.png" alt="" className="a"/>
    <img src="/images/planetst2.png" alt="" className="b"/>
    <img src="/images/planetst3.png" alt="" className="c"/>
    <img src="/images/planetst4.png" alt="" className="d"/>
    <h1>Welcome</h1>
    </Container>
  )
}

export default Welcome

const Container = styled.div`
background-image: url("/images/spacetest.jpg");
background-size:auto 100%;
height: 700px;
border:100px solid #273748;

img {
width:10%
}

.a {
  
}

`
