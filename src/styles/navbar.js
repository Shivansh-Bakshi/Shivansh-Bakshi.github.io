import styled from "styled-components";
import { Link } from "gatsby";
import fonts from "../fonts/fonts";
import { colors, transparency, device } from "./constants";
import { motion } from "framer-motion";

export const NavbarContainer = styled.div`
    position: fixed;
    min-width: 100%;
    min-height: 14%;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 50;
`

export const LeftContainer = styled(motion.span)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 60px;

    @media screen and (${device.MEDIUM_SCREEN}) {
        position: fixed;
        transform: unset;
        left: 0;
        margin-left: 0;
        top: 0;
        padding-top: 16vh;
        width: 0;
        background-color: ${colors.DARK_BLUE};
        height: 100vh;
        overflow: hidden;
    }
`

export const LeftMenu = styled.div`
    display: none;

    @media screen and (${device.MEDIUM_SCREEN}) {
        display: block;
        position: absolute;
        left: 0;
        margin-left: 60px;
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
`

export const LogoContainer = styled.span`
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translateY(-50%);

    @media screen and (${device.BIG_SCREEN}) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (${device.MEDIUM_SCREEN}) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

export const RightContainer = styled(motion.span)`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 60px;

    @media screen and (${device.MEDIUM_SCREEN}) {
        position: fixed;
        transform: unset;
        right: 0;
        margin-right: 0;
        top: 0;
        padding-top: 16vh;
        width: 0;
        background-color: ${colors.DARK_BLUE};
        height: 100vh;
        overflow: hidden;
        text-align: right;
    }
`

export const RightMenu = styled.div`
    display: none;

    @media screen and (${device.MEDIUM_SCREEN}) {
        display: block;
        position: absolute;
        right: 0;
        margin-right: 30px;
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
`

export const UnorderedList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;

    @media screen and (${device.MEDIUM_SCREEN}) {
        flex-direction: column;
    }
`

export const ListItem = styled.li`
    @media screen and (${device.MEDIUM_SCREEN}) {
        margin-right: unset;
        margin-top: 22px;
    }
`

export const PageLink = styled(Link)`
    ${fonts}

    font-family: 'Mulish', sans-serif;
    font-size: calc(16px + 0.3vh);
    font-weight: bold;
    text-decoration: none;
    color: ${colors.DARK_OFF_WHITE};
    background-color: inherit;
    padding: 20px;
    -webkit-tap-highlight-color: ${colors.RED + transparency[65]};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:focus {
        outline: none !important;
    }

    &.active {
        color: ${colors.RED};
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-color: ${colors.RED};
        text-decoration-thickness: 0.25rem;
    }
    
    @media screen and (${device.MEDIUM_SCREEN}){
        &:hover {
            background: ${colors.RED};
            border-radius: 10px;
            color: ${colors.LIGHT_OFF_WHITE};
            text-decoration-color: ${colors.LIGHT_OFF_WHITE};
            text-decoration: underline;
            text-underline-offset: 10px;
            text-decoration-thickness: 0.25rem;
        }   
    }
`

const Image = styled.img`
    width: 100px;
    filter: invert(99%) sepia(95%) saturate(12%) hue-rotate(226deg) brightness(116%) contrast(87%);

    @media screen and (${device.MEDIUM_SCREEN}) {
        width: 50px;
    }
`

export const HamburgerImage = styled(Image)`
    width: 50px;
    filter: invert(99%) sepia(95%) saturate(12%) hue-rotate(226deg) brightness(116%) contrast(87%);

    @media screen and (${device.MEDIUM_SCREEN}) {
        width: 30px;
    }
`

export const LogoImage = styled(Image)`
`