import styled from 'styled-components';
import { colors, device } from './constants';
import { motion } from 'framer-motion';
import fonts from "../fonts/fonts";

export const FooterContainer = styled.div`
    width: 100vw;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    z-index: 50;
`

export const MainFooter = styled(motion.div)`
    position: relative;
    width: 40vw;
    left: 50%;
    height: 0;
    transform: translate(-50%, 0);
    background-color: ${colors.TEA_GREEN};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    @media screen and (${device.MEDIUM_SCREEN}) {
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

export const SocialsContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const TextWithImage = styled.div`
    display: flex;
    justify-content: center;
`

export const FooterImage = styled.img`
    width: 15px;
    height: 15px;
    transform: translateY(3px);

    @media screen and (${device.MEDIUM_SCREEN}) {
        transform: unset;
    }
`

export const FooterText = styled.p`
    ${fonts}

    font-family: 'Source Code Pro', sans-serif;
    font-size: 17px;
    text-align: left;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;

    @media screen and (${device.MEDIUM_SCREEN}) {
        font-size: 11px;
    }
`