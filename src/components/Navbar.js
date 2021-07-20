import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.header`
    display: flex;
    width: 100%;
    height: 110px;
    gap: 28px;
    align-items: center;
    background-color: transparent;
    padding: 64px 32px;
    position: absolute;
    color: white;
    div {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    
    ul {
        color: black;
        display: none;
        list-style: none;
        gap: 32px;
        font-size: 12px;
        font-weight: 600;
        li {
            cursor: pointer;
        }
    }  

    ${props => props.open && css`
        background-color: white;
        h1 {
            display: none;
        }
        ul {
            display: flex;
        }
    `}
    
    @media screen and (min-width: 900px) {
        background-color: transparent;
        gap: 56px;
        padding: 64px;
        div {
            display: none;
        }
        h1 {
            display: inline;
        }
        ul {
            display: flex;
            color: white;
            font-size: 14px;
            align-items: center;
        }
    }
`;

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const handleClick = (e) => setOpen(open => !open);

    return (
        <Container open={open}>
            <div onClick={handleClick}>
                <img src={open ? "/images/icon-close.svg": "/images/icon-hamburger.svg" } alt=" "/>
            </div>
            <h1 open={open}>room</h1>
            <nav>
                <ul>
                    <li>home</li>
                    <li>shop</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
        </Container>
    )
}
