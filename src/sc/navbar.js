import styled, { css } from "styled-components";
import { Link } from "gatsby";
import fonts from "../fonts/fonts";

export const Container = styled.section`
    ${fonts}

    width: 100%;
    height: 7vh;
    background: black;
    left: 0;
    overflow: hidden;
    font-family: 'Source Code Pro';
    font-size: calc(16px + 0.3vh);
    z-index: 1;

    ${props => props.top && css`
        position: fixed;
        top: 0;
    `}
`

export const Nav = styled.nav`
    float: left;
    align-content: center;
    list-style-type: none;
    padding: 2.3vh;
    background-color: inherit;
`

export const UnorderedList = styled.ul`
    background-color: inherit;
`

export const PageLink = styled(Link)`
    text-decoration: none;
    color: #ccc;
    padding: calc(0.5vw + 0.5vh);
    background-color: inherit;
    &:hover {
        color: #eee;
        background: #333;
    }
`

export const ResumeLink = styled.a`
    text-decoration: none;
    color: #ccc;
    padding: calc(0.5vw + 0.5vh);
    background-color: inherit;
    &:hover {
        color: #eee;
        background: #333;
    }
`

export const ListItem = styled.li`
    display: inline-block;
    text-decoration: none;
    color: #ccc;
    background-color: inherit;
    padding-right: 2vh;
`
