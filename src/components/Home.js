import React from 'react'
import styled from 'styled-components'
import Welcome from './Welcome'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Art from './Art'

// import styled from 'styled-components'

function Home() {
  return (
<Container>
    <Welcome />
    <Projects />
    <About />
    <Contact />
    <Art />
</Container>
  )
}

export default Home

const Container = styled.main`

// SO the nav is 70px. Therefore the main is 100% of the view height - those 70px :)
min-height: calc(100vh - 70px);
// padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;
background: #273748;

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