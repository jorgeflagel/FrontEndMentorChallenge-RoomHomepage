import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 310px;
    &>div {
        text-aling: left;
        font-size: 12px;
        padding: 7% 10%;
        display: flex;
        flex-direction: column;
        gap: 9px;
        align-self: center;
        h2 {
            font-weight: 700;
            letter-spacing: 5px;
            font-size: 14px;
        }
        p {
            line-height: 20px;
            max-width: 42ch;
        }
    }
    @media screen and (min-width: 900px) {
        flex-direction: row;
        &>img:first-child {
            width: 29%;
        }
        &>img:last-child {
            width: 31%;
        }
        &>div {
            width: 40%;
            padding: 8% 5%;
            p {
                max-width: 52ch;
            }
        }
    }
    
`

export default function About() {
    return (
        <Container>
            <img src="/images/image-about-dark.jpg" alt="primera imagen" /> 
            <div>
                <h2>ABOUT OUR FURNITURE</h2>
                <p>Our multifunctional collection blends design and function to suit your individual taste. 
                Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. 
                Find the furniture pieces you need, from traditional to contemporary styles or anything in between. 
                Product specialists are available to help you create your dream space. </p>
            </div>
            <img src="/images/image-about-light.jpg" alt="segunda imagen" />
        </Container>
    )
}
