import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import fonts from "../fonts/fonts";

export const Container = styled.div`
    ${fonts}

    width: 100%;
    height: 25vh;
    background-color: #f2dc5d;
    /* color: #3b3b3b; */
    color: #a38c05;
    font-family: 'Source Code Pro';
    font-size: calc(13px + 0.2vw);
    position: relative;
`

export const Content = styled.div`
    position: absolute;
    bottom: 25%;
    left: 0%;
    right: 0%;
    text-align: center;
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 0.5em;
`

export const Updated = styled.div`
    padding-bottom: 1em;
`

export const DimText = styled.span`
    color: #c4a702;
`