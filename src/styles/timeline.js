import { motion } from "framer-motion";
import styled from "styled-components";
import fonts from "../fonts/fonts";
import { colors, transparency } from "./constants";
import { MAX_WIDTH } from "./device";

export const TimelineLineContainer = styled.div`
    height: 80%;
    position: relative;

    @media screen and (${MAX_WIDTH.TABLET}) {
        height: 90%;
        width: 100%;
        top: 60px;
    }

    @media screen and (${MAX_WIDTH.MOBILEL}) {
        top: 50px;
    }

    @media screen and (${MAX_WIDTH.MOBILEM}) {
        top: 30px;
    }
`

export const TimelineLine = styled.div`
    position: absolute;
    left: 30px;
    height: 100%;
    border-right: 3px solid ${colors.RED};

    @media screen and (${MAX_WIDTH.TABLET}){
        height: unset;
        left: unset;
        top: 30px;
        width: 100%;
        border-right: unset;
        border-bottom: 3px solid ${colors.RED};
    }
`

export const Timeline = styled.div`
    position: absolute;
    margin: 0 auto;
    min-width: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;

    @media screen and (${MAX_WIDTH.TABLET}) {
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${colors.DARK_BLUE + transparency[50]};
        border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${colors.YELLOW};
        border-radius: 6px;

        &:hover {
            background-color: ${colors.LIGHT_BLUE};
        }

        &:active {
            background-color: ${colors.RED};
        }
    }
`

export const TimelineContainer = styled(motion.ul)`
    position: relative;
    left: 30px;
    max-width: 70%;
    list-style: none;

    @media screen and (${MAX_WIDTH.LAPTOP}) {
        max-width: 90%;
    }

    @media screen and (${MAX_WIDTH.TABLET}) {
        left: unset;
        max-height: 60%;
        min-width: 100%;
    }
`

export const TimelineMarkerContainer = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    left: -25px;
    top: 52px;
    z-index: 1;
    background-color: ${colors.WHITE};
    border-radius: 50%;
    display: flex;

    @media screen and (${MAX_WIDTH.TABLET}) {
        left: 50%;
        transform: translateX(-50%);
        top: -25px;
    }

    @media screen and (${MAX_WIDTH.MOBILEM}) {
        width: 30px;
        height: 30px;
        top: -15px;
    }
`

export const TimelineMarkerImage = styled.img`
    margin: auto;
    width: 35px;

    @media screen and (${MAX_WIDTH.MOBILEM}) {
        width: 15px;
    }
`

export const TimelineEntryContainer = styled(motion.li)`
    position: relative;
    padding: 30px 50px;
    top: 30px;

    @media screen and (${MAX_WIDTH.TABLET}) {
        display: inline-block;
        padding: 30px 20px;
        vertical-align: top;
        white-space: normal;
        margin-bottom: 10px;
    }

    @media screen and (${MAX_WIDTH.MOBILEL}) {
        padding: 30px 10px;
    }
`

export const TimelineEntry = styled(motion.div)`
    ${fonts}

    position: relative;
    padding: 20px 40px;
    border: 1px solid ${colors.DARK_OFF_WHITE};
    border-radius: 10px;
    font-family: 'Mulish', sans-serif;
    font-size: calc(20px + 0.1vw);
    color: ${colors.LIGHT_OFF_WHITE};
    background-color: ${colors.LIGHT_BLUE + transparency[15]};
    transform-origin: 0% 50%;

    p {
        margin-top: 15px;
    }

    @media screen and (${MAX_WIDTH.TABLET}){
        padding: 20px 20px;
        top: 0;
        font-size: 17px;
    }

    @media screen and (${MAX_WIDTH.MOBILEL}) {
        font-size: 17px;
        padding: 20px 20px;
    }

    @media screen and (${MAX_WIDTH.MOBILEM}) {
        font-size: 13px;
    }

    @media screen and (${MAX_WIDTH.MOBILES}) {
        font-size: 10px;
    }
`