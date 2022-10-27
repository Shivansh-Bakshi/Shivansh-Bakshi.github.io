import styled from "styled-components";
import fonts from "../fonts/fonts";

export const Container404 = styled.div`
    ${fonts}

    font-family: 'Source Code Pro';
    margin: 0;
    padding: 0;
    position: relative;
`
export const Message = styled.div`
    gap: 2rem;
    position: absolute;
    top: 0;
    flex-direction: column;
    margin: 2rem 0;
    left: 0;
    right: 0;
    text-align: center;
`

export const MessageHeader = styled.h2`
    font-size: calc(23px + 1vw);
    font-weight: 700vh;
`

export const Message404 = styled.div`
    height: 100%;
    width: 100%;
    font-size: calc(32px + 25vw);
    line-height: calc(1.1em + 1vw);
`

export const MessageFooter = styled.h4`
    position: fixed;
    font-size: calc(16px + 1vw);
    color: black;
    left: 0;
    right: 0;
    bottom: 0;
`
