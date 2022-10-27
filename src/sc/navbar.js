import styled from "styled-components";
import { Link } from "gatsby";
import fonts from "../fonts/fonts";

export const Container = styled.section`
    ${fonts}

    width: 100%;
    height: 7vh;
    background: black;
    left: 0;
    box-shadow: 0 5px 5px 2px rgba(0, 0, 0, .2);
    overflow: hidden;
    font-family: 'Source Code Pro'
`

export const PageTitle = styled.h3`
    font-size: 2vh;
    color: #ccc;
    float: left;
    padding: 2.5vh;
    background-color: inherit;
`
export const Nav = styled.nav`
    float: right;
    align-content: center;
    list-style-type: none;
    padding: 2.5vh;
    background-color: inherit;
`

export const UnorderedList = styled.ul`
    background-color: inherit;
`

export const PageLink = styled(Link)`
    text-decoration: none;
    color: #ccc;
    padding: 1vw;
    background-color: inherit;
`

export const ListItem = styled.li`
    display: inline-block;
    text-decoration: none;
    color: #ccc;
    background-color: inherit;
    &:hover {
        ${PageLink} {
            color:#eee;
            background-color: #333;
        }
    }
`
