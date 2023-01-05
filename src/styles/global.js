import styled, { createGlobalStyle } from "styled-components";
import { colors, transparency } from "./constants";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`

export const Container = styled.div`
    width: 100vw;
    position: fixed;
    background-color: ${colors.BLACK};
`

export const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(${colors.BLACK + transparency[95]}, ${colors.DARK_BLUE + transparency[85]});
    position: absolute;
`

export const SubOverlay = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.visible ? colors.BLACK + transparency[50] : 'transparent'};
    transition: all 0.3s ease;
    position: absolute;
`

export const BodyContainer = styled.div`
    position: absolute;
    top: 16%;
    left: 0;
    min-height: 76vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`