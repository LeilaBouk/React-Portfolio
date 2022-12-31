import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'

function Loading() {
  return (
    <Container>
         <img src="./images/loading.gif" alt=""/>
    </Container>
  )
}

export default Loading

const Container = styled.div`
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    background: ${Palette.dark};
    perspective: 10px;

    img {
        height: 20%;
        width: 20%;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
    }
`