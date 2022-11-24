import React, { useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'

import Sphere from './AnimatedSphere';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls } from '@react-three/drei';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container>
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
    {/* <img src="/images/pfp.gif" alt=""/> */}
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

    canvas {
        z-index: -1;
    }
`

const Container = styled.div`
  padding-top: 10vw;

  h2 {
    font-size: 40px;
    text-decoration: underline;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 4px;
    text-underline-offset: 8px;
    margin-bottom: 10vh;
 }
    
`

const ContactForm = styled.div`

display: flex;
flex-direction: row;
align-items: center;

img {
  width: 40%;
  padding-left: 60px;
}

form {
  display: flex;
  // align-items: flex-start;
  flex-direction: column;
  width: 40%;
  font-size: 16px;
  padding-left: 60px;

  input {
    width: 100%;
    min-height: 35px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(123, 145, 171);
    &:focus {
      border: 2px solid rgb(144, 57, 57);
    }
  }
  
  textarea {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    max-height: 100px;
    min-height: 100px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(123, 145, 171);
    &:focus {
      border: 2px solid rgb(144, 57, 57);
    }
  }
  label {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: white;
  }
  input[type="submit"] {
    padding: 20px;
    margin-top: 2rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
    background: #7b91ab;
    color: white;
    border: none;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      background: #903939;
    }
  }`