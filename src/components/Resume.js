import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'

function Resume() {
  return (
    <Container>
      <iframe src="./pdfs/leilaboukella_resume.pdf" title="resume" frameborder="0"></iframe>
    </Container>
  )
}

export default Resume

const Container = styled.div`
    background: ${Palette.dark};

    iframe {
      width: 85%;
      height: 100vh;
    }

    
`