import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variant = {
  visible: { scale: 1, x:0,  transition: { duration: 0.6 } },
  hidden: { scale: 0.9, x:-500 },
}

function About() {

    // Scroll animation
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
        else {
            control.start("hidden");
          }
      }, [control, inView]);

  return (
    <Container id="about">
      <h2>ABOUT</h2>
      <motion.div
    ref={ref}
     variants={variant}
     initial="hidden"
     animate={control}>
         <Wrap>
        <img src="./images/pfp.gif" alt=""/>
        <p>
        Hi! I'm Leila, a front-end developer and artist based in Arizona.
        <br></br>
        <br></br>
        I grew up in the United Arab Emirates before moving to the United States.
        <br></br>
        <br></br>
        I went to college in New York at the School of Visual Arts.
        <br></br>
        <br></br>
        HTML | CSS | JS | React
        </p>
        </Wrap>
        </motion.div>
    </Container>
  )
}

export default About

const Container = styled.div`
margin: auto;

  h2 {
    padding-top: 10vw;
    margin-bottom: 70px;
    font-size: 70px;
    text-decoration: underline;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 6px;
    text-underline-offset: 20px;
 }

`

const Wrap = styled.div`

background: ${Palette.skyfade};
background-image: url("./images/roses.png");
background-size: cover;
display: flex;
padding: 80px;
margin: 50px;

img {
  width: 30%;
  height: 30%;
  margin: 10px 0px 10px 100px;
  border-radius: 3px;
}

p {
  margin: 10px 100px 10px 100px;
  font-size: 20px;
  background: white;
  color: #273748;
  padding: 20px;
  border-radius: 3px;
}
`