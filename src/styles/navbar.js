import styled from "styled-components";
import { Link } from "gatsby";
import fonts from "../fonts/fonts";
import { colors, transparency } from "./constants";
import { motion } from "framer-motion";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 14%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
`

export const LeftContainer = styled(motion.span)`
    position: relative;
    float: left;
    top: 30%;
    margin-left: 60px;

    @media screen and (max-width: 1280px) {
        position: fixed;
        left: 0;
        margin-left: 0;
        top: 0;
        padding-top: 16vh;
        background-color: ${colors.DARK_BLUE};
        height: 100vh;
        overflow: hidden;
    }
`

export const LeftMenu = styled.div`
    display: none;

    @media screen and (max-width: 1280px) {
        display: block;
        position: relative;
        float: left;
        top: 30%;
        margin-left: 30px;
        cursor: pointer;
    }
`

export const LogoContainer = styled.span`
    position: relative;
    float: right;
    margin-right: 60px;
    top: 20%;

    @media screen and (min-width: 1600px) {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%, 0);
    }

    @media screen and (max-width: 1280px) {
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%, 0);
    }
`

export const RightContainer = styled(motion.span)`
    position: relative;
    float: right;
    top: 30%;
    margin-right: 60px;

    @media screen and (max-width: 1280px) {
        position: fixed;
        right: 0;
        margin-right: 0;
        top: 0;
        padding-top: 16vh;
        background-color: ${colors.DARK_BLUE};
        height: 100vh;
        overflow: hidden;
        text-align: right;
    }
`

export const RightMenu = styled.div`
    display: none;

    @media screen and (max-width: 1280px) {
        display: block;
        position: relative;
        float: right;
        top: 30%;
        margin-right: 30px;
        cursor: pointer;
    }
`

export const UnorderedList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;

    @media screen and (max-width: 1280px) {
        flex-direction: column;
    }
`

export const ListItem = styled.li`
    @media screen and (max-width: 1280px) {
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
    
    @media screen and (min-width: 1280px){
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

export const ResumeLink = styled(PageLink).attrs({
    as: "a"
})`
`

const Image = styled.img`
    width: 100px;
    filter: invert(99%) sepia(95%) saturate(12%) hue-rotate(226deg) brightness(116%) contrast(87%);

    @media screen and (max-width: 1280px) {
        width: 50px;
    }
`

export const HamburgerImage = styled(Image)`
    width: 50px;
    filter: invert(99%) sepia(95%) saturate(12%) hue-rotate(226deg) brightness(116%) contrast(87%);

    @media screen and (max-width: 1280px) {
        width: 30px;
    }
`

export const LogoImage = styled(Image)`
`