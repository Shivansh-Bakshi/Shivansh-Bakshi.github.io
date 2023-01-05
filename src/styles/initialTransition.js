import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "./constants";

export const InitialTransitionContainer = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
`

export const Transition = styled(motion.div)`
    position: relative;
    width: 100%;
    background-color: ${colors.BLACK};
    z-index: 50;
`