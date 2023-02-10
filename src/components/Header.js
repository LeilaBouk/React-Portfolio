import React, { useState } from 'react'
import styled from 'styled-components'
import { Fonts } from './Fonts';
import { Palette } from './Colors'
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <Nav>
        {/* style={{display: "none"}} */}
        <NavMenu>
        <Link to="#projects" onClick={handleClick}>
            <span style={click ? {display: ""} : {display: "none"}}>PROJECTS</span>
        </Link>

        <Link to="#about" onClick={handleClick}>
            <span style={click ? {display: ""} : {display: "none"}}>ABOUT</span>
        </Link>

        <Link to="#contact" onClick={handleClick}>
            <span style={click ? {display: ""} : {display: "none"}}>CONTACT</span>
        </Link>

        <Link to="/resume" target="blank" onClick={handleClick}>
            <span style={click ? {display: ""} : {display: "none"}}>RESUME</span>
        </Link>


        <a href="https://leilaboukella.com/" target="blank" onClick={handleClick}>
            <span style={click ? {display: ""} : {display: "none"}}>ART</span>
        </a>

        </NavMenu>

        <Folder onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faXmark : faBars} />
        </Folder>

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
font-family: ${Fonts.secondary};

@media only screen and (max-width: 550px) {
                overflow-x: visible;
            }

`

const NavMenu = styled.div`

    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 550px) {
                flex-direction: column;
                margin-top: 30vh;
                background: ${Palette.dark};
                border-radius: 20px;
            }

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

            @media only screen and (max-width: 768px) {
                font-size: 18px;
            }

            /* Mobile Menu */
            @media only screen and (max-width: 550px) {
                padding: 15px;
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

const Folder = styled.div`
    color: white;
    font-size: 25px;
    cursor: pointer;
    user-select: none;

    @media only screen and (min-width: 550px) {
        display: none;
    }
`