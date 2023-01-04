import styled from 'styled-components';
import { colors } from './constants';
import { motion } from 'framer-motion';

export const FooterContainer = styled.div`
    width: 100vw;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
`

export const MainFooter = styled(motion.div)`
    position: relative;
    width: 40vw;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: ${colors.TEA_GREEN};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    @media screen and (max-width: 1280px) {
        width: 100vw;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`

export const ExposeFooterIconContainer = styled(motion.div)`
    position: relative;
    width: 50px;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    padding: 2px 10px 0 10px;
    background-color: ${colors.TEA_GREEN};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    cursor: pointer;
`

export const ExposeFooterIcon = styled.img`
    width: 30px;
`