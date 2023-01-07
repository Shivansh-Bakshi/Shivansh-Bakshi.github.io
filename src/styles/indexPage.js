import styled from "styled-components";
import { colors, device } from "./constants";
import fonts from "../fonts/fonts";

export const Portrait = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60vw;

    @media screen and (${device.MEDIUM_SCREEN}) {
        width: unset;
        height: 50vh;
        right: unset;
        left: -20%;
    }

    @media screen and (min-width: 768px) and (${device.MEDIUM_SCREEN}) {
        width: unset;
        height: 50vh;
        right: 0;
        left: unset;   
    }
`

export const TextContainer = styled.p`
    ${fonts}
    
    position: relative;
    left: 0;
    font-family: 'Lane', sans-serif;
    font-size: calc(32px + 0.3vw);
    text-align: left;
    color: ${props => props.red ? colors.RED : colors.LIGHT_OFF_WHITE};
    display: inline;

    @media screen and (${device.MEDIUM_SCREEN}) {
        font-size: 23px;
    }
`

export const Emphasis = styled.p`
    ${fonts}
    
    position: relative;
    left: 0;
    font-family: 'Mulish', sans-serif;
    font-size: calc(75px + 1vw);
    text-align: left;
    color: ${props => props.red ? colors.RED : colors.DARK_OFF_WHITE};
    display: inline;

    @media screen and (${device.MEDIUM_SCREEN}) {
        font-size: 45px;
    }
`

const buttonWidth = '200px';
const buttonHeight = '70px';
export const ButtonContainer = styled.div`
    ${fonts}

    position: relative;
    margin-top: 30px;
    max-width: ${buttonWidth};
    max-height: ${buttonHeight};
    background-color: ${colors.RED};
    border-radius: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;

    @media screen and (${device.MEDIUM_SCREEN}) {
        padding-top: 10px;
        padding-bottom: 10px;
    }
`

export const ResumeLink = styled.a`
    font-family: 'Mulish', sans-serif;
    font-size: 25px;
    color: ${colors.LIGHT_OFF_WHITE};
    text-decoration: none;

    @media screen and (${device.MEDIUM_SCREEN}) {
        font-size: 23px;
    }
`