import styled from "styled-components";
import fonts from "../fonts/fonts";
import { colors } from "./constants";

export const Error = styled.h1`
    ${fonts}

    margin: auto;
    font-family: 'Source Code Pro', sans-serif;
    font-weight: bold;
    font-size: 80px;
    color: ${colors.DARK_OFF_WHITE};
`

export const Message = styled.p`
    ${fonts}

    margin: auto;
    margin-top: 0;
    font-family: 'Source Code Pro', sans-serif;
    font-weight: bold;
    font-size: 40px;
    color: ${colors.DARK_OFF_WHITE};
`