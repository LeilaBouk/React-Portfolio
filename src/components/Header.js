import React, { useState } from 'react'
import styled from 'styled-components'
import { Fonts } from './Fonts';
import { Palette } from './Colors'
import { HashLink as Link } from 'react-router-hash-link';
// WIP individual project pages
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    

  return (
    <Nav>

        <NavMenu>
        <Link to="#projects" onClick={closeMobileMenu}>
            <span>PROJECTS</span>
        </Link>

        <Link to="#about" onClick={closeMobileMenu}>
            <span>ABOUT</span>
        </Link>

        <Link to="#contact" onClick={closeMobileMenu}>
            <span>CONTACT</span>
        </Link>

        <Link to="/resume" target="blank" onClick={closeMobileMenu}>
            <span>RESUME</span>
        </Link>


        <a href="https://leilaboukella.com/" target="blank" onClick={closeMobileMenu}>
            <span>ART</span>
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

            @media only screen and (max-width: 768px) {
                font-size: 18px;
            }

            @media only screen and (max-width: 550px) {
                display: none;
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


    @media only screen and (min-width: 550px) {
        display: none;
    }
`