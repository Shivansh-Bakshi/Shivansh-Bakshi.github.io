import styled from 'styled-components';
import { colors } from '../constants';
import { motion } from 'framer-motion';
import fonts from "../../fonts/fonts";
import { MAX_WIDTH } from '../device';

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

    @media screen and (${MAX_WIDTH.LAPTOP}) {
        width: 50vw;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    @media screen and (${MAX_WIDTH.TABLET}) {
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
    opacity: 0.7;
`

export const TextWithImage = styled.div`
    display: flex;
    justify-content: center;
`

export const FooterImage = styled.img`
    width: 15px;
    height: 15px;
    transform: translateY(3px);

    @media screen and (${MAX_WIDTH.TABLET}) {
        transform: unset;
    }
`

export const FooterText = styled.p`
    ${fonts}

    font-family: 'Source Code Pro', sans-serif;
    font-size: 17px;
    text-align: left;
    margin-top: 3px;
    margin-bottom: 3px;
    text-align: center;
    opacity: 0.7;

    @media screen and (${MAX_WIDTH.TABLET}) {
        font-size: 11px;
    }

    @media screen and (${MAX_WIDTH.LAPTOP}) {
        font-size: 15px;
    }
`