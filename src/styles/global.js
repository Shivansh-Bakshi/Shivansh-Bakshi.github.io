import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { colors, device, transparency } from "./constants";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    body {
        overflow: hidden;    
    }
}
`

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: transparent;
`

export const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(${colors.BLACK + transparency[95]}, ${colors.DARK_BLUE + transparency[85]});
    position: absolute;
`

export const CanvasContainer = styled.div`
    position: absolute;
    z-index: -1;
`

const SubOverlayComponent = styled(motion.div)`
    position: absolute;
    opacity: 0.5;
    top: 0;
    width: 100vw;
    background-color: ${colors.BLACK};
    z-index: 30;
`

export const SubOverlay = ({ visible }) => {
    const subOverlay = {
        initial: {
            height: '0'
        },
        animate: {
            height: visible ? '100vh' : 0
        },
    }

    return(
        <SubOverlayComponent initial="initial" animate="animate" variants={subOverlay} />
    )
}

const BodyContainer = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    min-height: 85vh;
    max-height: 85vh;
    min-width: 90vw;
    max-width: 100vw;
    display: grid;
    align-items: center;

    @media screen and (${device.MEDIUM_SCREEN}) {
        align-items: flex-start;
    }
    /* border: 3px solid white; */
`

export const BodyContainerNCol = styled(BodyContainer)`
    grid-template-columns: ${props => "1fr ".repeat(props.n).trim()};
    /* border: 3px solid white; */
`

export const RowNContainer = styled.div`
    grid-row: ${props => props.n};
    /* border: 3px solid white; */
`

export const ColNContainer = styled.div`
    grid-column: ${props => props.n};
    /* border: 3px solid white; */
`