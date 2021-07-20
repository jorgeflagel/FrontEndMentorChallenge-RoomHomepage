import React, { useState } from 'react';
import styled from 'styled-components';
import Arrows from './Arrows';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 419px;
    &>div {
        display: flex;
        flex-direction: column;
        padding: 7% 5%;
        position: relative;
        .text_container {
            display: flex;
            flex-direction: column;
            gap: 14px;
            font-size: 12px;
            align-self: center;
        }
        h2 {
            font-weight: 600;
            font-size: 28px;
            max-width: 20ch;
        }
        p {
            line-height: 20px;
            max-width: 42ch;
            font-weight: 500;
        }
        a {
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 10px;
            cursor: pointer;
            line-height: 16px;
            margin-top: 40px;
            &:visited {
                color: black;
            }
        }
    }
    @media screen and (min-width: 900px) {
        flex-direction: row;
        &>div {
            width: 42%;
            gap: 22px;
            padding-bottom: 120px;
            h2 {
                font-size: 40px;
                max-width: 15ch;
            } 
            a {
                margin-top: 10px;
            }
        }
        &>img {
            width: 58%;
        }
    }
`

const HERO_INFO= [
    {
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        image: "/images/desktop-image-hero-1.jpg",
        imageMobile: "/images/mobile-image-hero-1.jpg"
    },
    {
        title: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image: "/images/desktop-image-hero-2.jpg",
        imageMobile: "/images/mobile-image-hero-2.jpg"
    },
    {
        title: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        image: "/images/desktop-image-hero-3.jpg",
        imageMobile: "/images/mobile-image-hero-3.jpg"
    }
]

export default function Hero({windowWidth}) {

    const [slide, setSlide] = useState(0);

    return (
        <Container>
            <img src={windowWidth >= 900 ? HERO_INFO[slide].image : HERO_INFO[slide].imageMobile} alt="imagen" />
            <div>
                <div className="text_container">
                    <h2>{HERO_INFO[slide].title}</h2>
                    <p>{HERO_INFO[slide].text}</p>
                    <a href="/">Shop Now <img src="./images/icon-arrow.svg" alt="" width={40}/></a>
                </div>
                <Arrows setSlide={setSlide} slideLength={HERO_INFO.length}/>
            </div>
        </Container>
    )
}
