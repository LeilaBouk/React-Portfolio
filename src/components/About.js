import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'
import { Fonts } from './Fonts'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';

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
        <img src="./images/elementsb.png" alt="UFO Taurus Comet" className="a"/>
        <img src="./images/stars2.png" alt="stars" className="b"/>
      <h2>ABOUT</h2>
      <motion.div
    ref={ref}
     variants={variant}
     initial="hidden"
     animate={control}>
         <Wrap className= "about">
        <img src="./images/pfp.gif" alt="animated robot"/>
        <p>
        <h4>Hi! I'm Leila,</h4> 
        A front-end developer with a background in illustration, giving me a keen eye for color and design. 
        Wanting to expand my skillset I took a bootcamp and learned to code. This has enabled me to bring
        all my skills together to create beautiful front-end work.
        <br></br>
        <br></br>
        I've lived in several places during my life, The United Arab Emirates, NYC, and Arizona. I have a strong love for travel and learning the history behind the places I visit. I spend much of my free time cooking, coding, animating, and drawing.
        <br></br>
        <br></br>
        I'm detail oriented, a fast learner, adaptable, creative, and always working to improve my skills.
        <br></br>
        <br></br>
        <Link to="/resume" target="blank">
        <button>Resume</button>
        </Link>
        </p>
        </Wrap>
        <Wrap className= "skills">
        <h3>Skill Highlights</h3>
        <p>
        HTML / CSS / JS / React / Sass / jQuery / Bootstrap / Handlebars / Git / Styled Components / Photoshop / Adobe Animate / Adobe Illustrator / Google Workspace
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

// Titles
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
    font-family: ${Fonts.main};
 }

 h3 {
  margin: 20px;
  font-size: 40px;
  text-decoration: underline;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  word-spacing: 6px;
  text-underline-offset: 10px;
 }

 h4 {
  color: white;
  font-size: 30px;
  text-align: start;
  padding-left: 20px;
  letter-spacing: 2px;
 }

//  Parallax Background Elements
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

// About Section
.about {
  p {
    font-size: 20px;
    line-height: 120%;
    background: ${Palette.dark};
    color: ${Palette.light};
    padding: 20px;
    border-radius: 3px;
  }
}

// Skills Section
.skills {
  flex-direction: column;
  align-items: center;

  p {
    font-size: 26px;
    background: ${Palette.dark};
    color: ${Palette.light};
    padding: 20px;
    border-radius: 3px;
    font-weight: bold;
    word-spacing: 6px;
    line-height: 200%;
  }
}

`

const Wrap = styled.div`

// Cards
background-image: url("./images/glass.png");
border: solid 2px white;
border-radius: 20px;
background-size: cover;
display: flex;
padding: 50px;
margin: 50px;
font-family: ${Fonts.secondary};

@media screen and (max-width: 900px) {
  flex-direction: column;
  align-items: center;
}

button {
  margin: 10px;
  font-family: ${Fonts.secondary};
  color: ${Palette.light};
  padding: 8px;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  background: ${Palette.dark};
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    color: white;
    background: ${Palette.water};
  }
}

img {
  width: 30%;
  height: 30%;
  padding: 20px;
  border-radius: 10%;

  @media screen and (max-width: 900px) {
    width: 50%;
    height: 50%;
  }
}


`