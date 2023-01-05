import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  return (
    <Nav>

{/* <Icon src="https://c.tenor.com/TYWdCAZu258AAAAC/guardians-of-the-galaxy-rocket-raccoon.gif"/> */}

        <NavMenu>
        <Link to="#projects">
            {/* <img src='./images/project-icon.png' alt='projects'/> */}
            <span>PROJECTS</span>
        </Link>

        <Link to="#about">
            {/* <img src='./images/about-icon.png' alt='about'/> */}
            <span>ABOUT</span>
        </Link>

        <Link to="#contact">
            {/* <img src='./images/contact-icon.png alt='contact'/> */}
            <span>CONTACT</span>
        </Link>

        <Link to="/resume" target="blank">
            {/* <img src='./images/resume-icon.png' alt='resume'/> */}
            <span>RESUME</span>
        </Link>


        <a href="https://lariatel.com/work" target="blank">
            {/* <img src='./images/resume-icon.png' alt='resume'/> */}
            <span>ART</span>
        </a>

        </NavMenu>

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
background: ${Palette.dark};
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;

    a:visited { 
        text-decoration: none;
        color: white; 
       }
    

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        color: white;
        text-decoration: none; 

        img {
            height: 20px;
        }

        span {
            letter-spacing: 1.50px;
            position: relative;
            font-size: 25px;
            font-weight: bold;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            @media only screen and (max-width: 800px) {
                font-size: 18px;
            }

            @media only screen and (max-width: 600px) {
                font-size: 15px;
            }

            &:after {
                content: "";
                height: 3px;
                background: ${Palette.red};
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                opacity: 0;
                transform-origin: left;
                transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
                color: ${Palette.red};
            }


        }

        &:hover {
            color: ${Palette.light};
            span:after {
                transform: scaleX(1);
                opacity: 1;
                color: ${Palette.red};
            }
        }
    }
`

const Icon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`