import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variant = {
  visible: { x:0,  transition: { duration: 0.6 } },
  hidden: { x:-500 },
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
        <img src="./images/elementsb.png" alt="" className="a"/>
        <img src="./images/stars2.png" alt="" className="b"/>
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
background-size:auto 100%;
display: flex;
position: relative;
align-items: center;
transform-style: preserve-3d;
z-index: -1;
flex-wrap: wrap;
justify-content: center; 

  h2 {
    padding-top: 10vw;
    margin-bottom: 20px;
    font-size: 70px;
    text-decoration: underline;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 6px;
    text-underline-offset: 20px;
 }

 .a, .b {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: -1;
}

.a {
  transform: translateZ(-5px) scale(2);
}

.b {
  transform: translateZ(-10px) scale(2);
}

`

const Wrap = styled.div`

background-image: url("./images/glass.png");
border: solid 2px white;
border-radius: 20px;
background-size: cover;
display: flex;
padding: 50px;
margin: 50px;

@media screen and (max-width: 900px) {
  flex-direction: column;
  align-items: center;
}

img {
  width: 30%;
  height: 30%;
  padding: 20px;
  border-radius: 3px;

  @media screen and (max-width: 900px) {
    width: 50%;
    height: 50%;
  }
}

p {
  font-size: 20px;
  background: ${Palette.dark};
  color: ${Palette.light};
  padding: 20px;
  border-radius: 3px;
}
`