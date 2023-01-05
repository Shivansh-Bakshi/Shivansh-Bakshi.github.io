import styled from "styled-components";
import fonts from "../fonts/fonts";
import { colors, device } from "./constants";

export const Error = styled.h1`
    ${fonts}

    margin: auto;
    margin-bottom: 30px;
    font-family: 'Source Code Pro', sans-serif;
    font-weight: bold;
    font-size: 80px;
    text-align: center;
    color: ${colors.DARK_OFF_WHITE};

    @media screen and (${device.mobile}) {
        font-size: 40px;
    }
`

export const Message = styled.p`
    ${fonts}

    margin: auto;
    margin-top: 0;
    font-family: 'Source Code Pro', sans-serif;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    color: ${colors.DARK_OFF_WHITE};

    @media screen and (${device.mobile}) {
        font-size: 20px;
    }    
`