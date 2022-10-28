import styled from "styled-components";
import fonts from "../fonts/fonts";

export const Container = styled.div`
    ${fonts}

    height: 93vh;
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    background-color: black;
    color: white;
    font-family: 'Lane';
    position: relative;
`

export const IntroMessage = styled.div`
    font-size: calc(32px + 5vw);
    text-align: left;
    position: absolute;
    bottom: 10%;
    width: 100%;
    /* position: relative;
    top: 50%;
    transform: translateY(-50%); */
    
    background-color: inherit;
`

export const IntroHeader = styled.div`
    margin-left: 2vh;
    font-size: calc(23px + 1vw);
    background-color: inherit;
    color: white;
`
export const IntroBody = styled.div`
    padding-left: 2vh;
    color: black;
`

export const IntroFooter = styled.div`
    margin-left: 2vh;
    font-size: calc(16px + 1vw);
    background-color: inherit;
    color: white;
`