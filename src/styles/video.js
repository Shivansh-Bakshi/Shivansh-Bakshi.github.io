import styled from "styled-components";
import { colors } from "./constants";
import { motion } from "framer-motion";


export const VideoContainer = styled(motion.div)`
    position: fixed;
    min-width: 100vw;
    min-height: 100vh;
    top: 0;
    left: 0;
    background-color: ${colors.BLACK};
    opacity: 0;
    z-index: -50;
`