import styled from "styled-components";
import fonts from "../fonts/fonts";

export const Container = styled.div`
    ${fonts}

    height: 93vh;
    background-color: black;
    color: white;
    font-family: 'Lane';
    position: relative;
`

export const Waves = styled.div`
    position: absolute;
    top: 10%;
    width: 100%;
    background-color: inherit;
`

export const Message = styled.div`
    font-size: calc(32px + 5vw);
    text-align: left;
    position: absolute;
    bottom: 10%;
    width: 100%;

    background-color: inherit;
`

export const Header = styled.div`
    margin-left: 2vh;
    font-size: calc(23px + 1vw);
    background-color: inherit;
    color: white;
`
export const Body = styled.div`
    padding-left: 2vh;
    color: black;
    background-color: #eee;
`

export const Footer = styled.div`
    margin-left: 2vh;
    font-size: calc(16px + 1vw);
    background-color: inherit;
    color: white;
`