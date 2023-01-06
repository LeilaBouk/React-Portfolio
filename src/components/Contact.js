import React, { useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import { Fonts } from './Fonts'

import Sphere from './AnimatedSphere';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls } from '@react-three/drei';
import { Palette } from './Colors'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }).then (
        message => alert("Message sent! Thank you")
      );
      e.target.reset()
  };

  return (
    <Container id="contact">
         <h2>CONTACT</h2>
    <ContactForm>
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name</label>
      <input type="text" name="user_name" />
      <label>Your Email</label>
      <input type="email" name="user_email" />
      <label>Your Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    <Wrapper>
    <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 5, 2]} intensity={4} color="#e3a1ff"/>
            <Suspense fallback={null}>
            <Sphere/>
            </Suspense>
        </Canvas>
        </Wrapper>
    </ContactForm>
    </Container>
  )
}

export default Contact

const Wrapper = styled.div`
    position: relative;
    // background: #332340;
    height: 500px;
    width: 500px;
    padding-left: 180px;

    @media screen and (max-width: 1000px) {
      display: none;
    }

    canvas {
        z-index: -1;

    }
`

const Container = styled.div`
  padding-top: 7vw;
  padding-bottom: 4vw;

  h2 {
    font-size: 70px;
    text-decoration: underline;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 6px;
    text-underline-offset: 20px;
    margin-bottom: 10vh;
    font-family: ${Fonts.main};
    
 }
    
`

const ContactForm = styled.div`

display: flex;
flex-direction: row;
align-items: center;
font-family: ${Fonts.secondary};

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  font-size: 16px;
  padding-left: 60px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 0;
    margin: 0 80px 0 80px;
  }

  input {
    width: 100%;
    background: ${Palette.light};

    min-height: 35px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(123, 145, 171);
    &:focus {
      border: 2px solid ${Palette.water};
    }
  }
  
  textarea {
    max-width: 100%;
    min-width: 100%;
    background: ${Palette.light};
    width: 100%;
    max-height: 100px;
    min-height: 100px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(123, 145, 171);
    &:focus {
      border: 2px solid ${Palette.water};
    }
  }
  label {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: ${Palette.white};
  }
  input[type="submit"] {
    font-family: ${Fonts.main};
    padding: 20px;
    margin-top: 2rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    background: ${Palette.water};
    color: ${Palette.grey};
    border: none;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      background: ${Palette.red};
      color: ${Palette.white};
    }
  }`

  