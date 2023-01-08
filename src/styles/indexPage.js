import styled from "styled-components";
import { colors } from "./constants";
import fonts from "../fonts/fonts";
import { MAX_WIDTH } from "./device";
import ProgressiveImage from "../components/ProgressiveImage";

export const ProgressivePortrait = styled(ProgressiveImage)`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60vw;

    @media screen and (${MAX_WIDTH.LAPTOP}) {
        width: unset;
        height: 60vh;
        right: -20%;
    }

    @media screen and (${MAX_WIDTH.TABLET}) {
        height: 50vh;
        right: unset;
    }

    @media screen and (${MAX_WIDTH.MOBILES}) {
        height: 40vh;
    }
`

export const Portrait = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60vw;

    @media screen and (${MAX_WIDTH.LAPTOP}) {
        width: unset;
        height: 60vh;
        right: -20%;
    }

    @media screen and (${MAX_WIDTH.TABLET}) {
        height: 50vh;
        right: unset;
    }

    @media screen and (${MAX_WIDTH.MOBILES}) {
        height: 40vh;
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

    @media screen and (${MAX_WIDTH.TABLET}) {
        font-size: 23px;
    }

    @media screen and (${MAX_WIDTH.MOBILEM}) {
        font-size: 20px;
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

    @media screen and (${MAX_WIDTH.TABLET}) {
        font-size: 43px;
    }

    @media screen and (${MAX_WIDTH.MOBILEM}) {
        font-size: 30px;
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

    @media screen and (${MAX_WIDTH.TABLET}) {
        padding-top: 10px;
        padding-bottom: 10px;
    }
`

export const ResumeLink = styled.a`
    font-family: 'Mulish', sans-serif;
    font-size: 25px;
    color: ${colors.LIGHT_OFF_WHITE};
    text-decoration: none;

    @media screen and (${MAX_WIDTH.TABLET}) {
        font-size: 23px;
    }
`