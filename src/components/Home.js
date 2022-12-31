import React from 'react'
import styled from 'styled-components'
import Welcome from './Welcome'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import { Palette } from './Colors'

// import styled from 'styled-components'

function Home() {
  return (
<Container>
    <Header />
    <Welcome />
    <Projects />
    <About />
    <Contact />
    <Footer />
</Container>
  )
}

export default Home

const Container = styled.main`

background-image: url("./images/bgtexture.png");
// background-size:auto 100%;
background-size: contain;
// background-repeat: no-repeat;
// background-attachment: fixed;
height: 100vh;
position: relative;
overflow-x: hidden;
overflow-y: auto;
// background: ${Palette.dark};
perspective: 10px;

&:before {
  no-repeat fixed;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
`