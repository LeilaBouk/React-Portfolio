import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'

function Projects() {
  return (
    <Container  id="projects">
    <h2>PROJECTS</h2>
    <Content>
        <Wrap>
            <img src="./images/movie.png" alt=""/>
            <a href="https://jesus-orduno.github.io/movie-night-mania/" target="blank">
            <div>
            <h4>
               Languages: HTML / CSS / JavaScript
               <br></br>
               <br></br>
               Ever had trouble deciding what to watch on movie night? 
               Try Movie Night Mania! Simply enter in your 
               genre and platform prefrences and let us find a movie for you!
            </h4>
            </div>
            <h3>Movie Night Mania</h3>
            </a>
        </Wrap>
        <Wrap>
        <a href="https://springbot-game.herokuapp.com/" target="blank">
            <img src="./images/springbot.png" alt=""/>
            <div>
            <h4>
               Languages: Handlebars / SCSS / JavaScript
               <br></br>
               <br></br>
               Springbot is a challenging mini game built to improve your keyboard skills. Login to view highscores and compete against other players worldwide!
            </h4>
            </div>
            <h3>Springbot</h3>
        </a>
        </Wrap>
        <Wrap>
        <a href="https://leilabouk.github.io/M4-CodeQuiz/" target="blank">
            <img src="./images/quiz.png" alt=""/>
            <div>
            <h4>
               Languages: HTML / CSS / JavaScript
               <br></br>
               <br></br>
               Test your skills with this coding quiz! Robo buddy will cheer you on!
            </h4>
            </div>
            <h3>Quiz Game</h3>
        </a>
        </Wrap>
        <Wrap>
        <a href="https://leilabouk.github.io/M3-PasswordGenerator/" target="blank">
            <img src="./images/passGen.png" alt=""/>
            <div>
            <h4>
               Languages: HTML / CSS / JavaScript
               <br></br>
               <br></br>
               Easily generate a secure password with this app
            </h4>
            </div>
            <h3>Password Generator</h3>
        </a>
        </Wrap>
        <Wrap>
            <img src="./images/demo.png" alt=""/>
            <a href="https://github.com/LeilaBouk/M14-TechBlog" target="blank">
            <div>
            <h4>
               Languages: Handlebars / SCSS / JavaScript
               <br></br>
               <br></br>
               Bistro Board is a place for chefs to gather and share thoughts on the food industry.
            </h4>
            </div>
            <h3>Bistro Board</h3>
            </a>
        </Wrap>
        <Wrap>
            <img src="./images/placeholder.jpg" alt=""/>
            <div>
            <h4>
               Page unavailable
            </h4>
            </div>
            <h3>Coming Soon</h3>
        </Wrap>
    </Content>
</Container>
  )
}

export default Projects

const Container = styled.div`
     background: ${Palette.sky};
     background-image: url("./images/skybox.png");
     background-size: cover;
     padding: 0 calc(3.5vw + 5px);
     padding-top: 2vw;
     padding-bottom: 13vw;

     h2 {
        font-size: 40px;
        text-decoration: underline;
        color: white;
        font-weight: bold;
        letter-spacing: 1px;
        word-spacing: 4px;
        text-underline-offset: 8px;
     }
`

const Content = styled.div`
    display: grid;
    grid-gap: 120px 40px;
    grid-template-columns: repeat(3, minmax(0,1fr));

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, minmax(0,1fr));
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
`

const Wrap = styled.div`

border-radius: 3px;
cursor: pointer;
position: relative;
// overflow: hidden;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: black;
        border-radius: 3px;
        z-index: 1;
    }

    h3 {
        border-radius: 3px;
        border: 3px solid rgba(249, 249, 249, 0.1);
        background: ${Palette.red};
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        padding: 4px;
        color: white;
        font-size: 30px;
    }

    a {
        text-decoration: none; 
    }

    a:visited { 
        text-decoration: none;
        color: white; 
       }

    div {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0px;
        opacity: 0;
        z-index: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        display: flex;
        justify-content: center;
        align-items: center;

        h4{
            color: white;
            padding: 12px;
            font-size: 1.5vw;
        }
       }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        cursor: pointer;

        h3 {
            background: ${Palette.dark};
            color: white;
        }

        div {
            opacity: 1;
            object-fit: cover;
            background: rgba(37, 39, 58, 0.76);
        }
    }
`

