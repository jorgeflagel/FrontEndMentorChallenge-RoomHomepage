import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: black;
    display: flex;
    position: absolute;
    width: 112px;
    height: 56px;
    top: -56px;
    right: 0;
    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        &:hover {
            background-color: gray;
        }
    }
    img {
        width: 8,4px;
        heigth: 16,8px;
    }
    @media screen and (min-width: 900px) {
        width: 160px; 
        height: 80px;
        top: auto;
        right: auto;
        bottom: 0;
        left: 0;
        img {
            width: 12px;
            height: 24px;
        }
    }
`


export default function Arrows({ setSlide, slideLength }) {

    const next = (e) => {
        setSlide(slide => {
            if(slide + 1 === slideLength) return 0;
            else return slide+1;
        })
    }
    const previous = (e) => {
        setSlide(slide => {
            if(slide === 0) return slideLength-1;
            else return slide-1;
        })
    }

    return (
        <Container>
            <div onClick={previous} style={{cursor: "pointer", height: "100%", width:"50%"}}>
                <img src="/images/icon-angle-left.svg" alt="left" width={12} height={24}/>
            </div>
            <div onClick={next} style={{cursor: "pointer",  height: "100%", width:"50%"}}>
                <img src="/images/icon-angle-right.svg" alt="right" width={12} height={24}/>
            </div>
        </Container>
    )
}
