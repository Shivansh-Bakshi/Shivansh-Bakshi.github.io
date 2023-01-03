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
    height: 100vh;
    overflow: hidden;
    position: fixed;
`

export const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(${colors.BLACK + transparency[95]}, ${colors.DARK_BLUE + transparency[85]});
    position: fixed;
`

export const NavbarContainer = styled.div`
    width: 100%;
    height: 16%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
`

export const BodyContainer = styled.div`
    position: absolute;
    top: 16%;
    left: 0;
    min-height: 74vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`