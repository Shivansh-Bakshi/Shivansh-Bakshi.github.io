import styled, {css} from "styled-components";
import fonts from "../fonts/fonts";

export const Container = styled.div`
    ${fonts}

    font-family: 'Mulish';
    padding: 1vh;
    background-color: #eee;

    ${props => props.navbarFixed && css`
        padding-top: 8vh;
    `}
`