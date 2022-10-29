import styled from "styled-components";

export const Container = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    margin-top: 1vh;
    margin-bottom: 1vh;
    padding: 1vh;
    background-color: #fff;
    border-radius: 1vh;
    text-align: left;
    
    font-size: calc(16px + 0.3vw);
    list-style-position: inside;
`

export const PlainCard = styled(Container)`
    background-color: #eee;
`

export const Title = styled.p`
    font-size: calc(32px + 1vw);
    padding-left: 0.5vh;
`