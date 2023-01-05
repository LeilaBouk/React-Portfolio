import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'

function Pdf() {
  return (
    <Container>
      <iframe src="./pdfs/test.pdf" title="resume" frameborder="0"></iframe>
    </Container>
  )
}

export default Pdf

const Container = styled.div`
    background: ${Palette.dark};

    iframe {
      width: 85%;
      height: 100vh;
    }

    
`