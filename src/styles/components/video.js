import styled from "styled-components";
import { motion } from "framer-motion";

export const VideoContainer = styled(motion.div)`
    position: fixed;
    min-width: 100vw;
    min-height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: -50;
`

export const VideoPlayerContainer = styled(motion.div)`
    position: absolute;
    width: 70%;
    padding-bottom: 39.37%;
    margin: auto auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
`

export const VideoPlayer = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
`