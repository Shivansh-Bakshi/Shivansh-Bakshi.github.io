import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { colors, transitionEffects, transparency } from "./constants";
import { motion } from "framer-motion";

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
    position: fixed;
    background-color: ${colors.BLACK};
`

export const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(${colors.BLACK + transparency[95]}, ${colors.DARK_BLUE + transparency[85]});
    position: absolute;
`

export const CanvasContainer = styled.div`
    position: fixed;
    left: 50%;
    transform: translate(-50%,0);
    z-index: -1;
`

const SubOverlayComponent = styled(motion.div)`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: ${colors.BLACK};
    transition: all 0.3s ease;
`

export const SubOverlay = ({ visible }) => {
    const subOverlay = {
        initial: {
            opacity: '0'
        },
        animate: {
            opacity: visible ? '0.5' : '0'
        },
        transition: transitionEffects
    }

    return(
        <SubOverlayComponent initial="initial" animate="animate" variants={subOverlay} />
    )
}

export const BodyContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 70vh;
    min-width: 70vw;
    max-height: 70vh;
    max-width: 70vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 3px solid white;
    border-radius: 20px;
`