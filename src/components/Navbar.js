import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    width: 100%;
    gap: 56px;
    align-items: center;
    padding: 64px;
    backgorund-color: transparent;
    position: absolute;
    color: white;
    ul {
        display: flex;
        list-style: none;
        gap: 32px;
        li {

        }
    }
`;

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <Container>
            <img src={open ? "/images/icon-close.svg": "/images/icon-hamburger.svg" } alt=" " />
            <h1>room</h1>
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
