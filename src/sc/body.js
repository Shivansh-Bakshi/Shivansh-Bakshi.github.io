import styled, {css} from "styled-components";
import fonts from "../fonts/fonts";

export const Container = styled.div`
    ${fonts}

    font-family: 'Lane';
    padding: 1vh;
    background-color: #eee;

    ${props => props.navbarFixed && css`
        padding-top: 8vh;
    `}
`