import styled from "styled-components";
import fonts from "../../fonts/fonts";
import { colors } from "../constants";
import { MAX_WIDTH } from "../device";

export const NotFoundError = styled.h1`
    ${fonts}

    margin: auto;
    margin-bottom: 30px;
    font-family: 'Source Code Pro', sans-serif;
    font-weight: bold;
    font-size: 80px;
    text-align: center;
    color: ${colors.DARK_OFF_WHITE};
    grid-row: 1;

    @media screen and (${MAX_WIDTH.TABLET}) {
        font-size: 40px;
    }
`

export const NotFoundMessage = styled.p`
    ${fonts}

    margin: auto;
    margin-top: 0;
    font-family: 'Source Code Pro', sans-serif;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    color: ${colors.DARK_OFF_WHITE};
    grid-row: 2;

    @media screen and (${MAX_WIDTH.TABLET}) {
        font-size: 20px;
    }    
`