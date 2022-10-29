import styled from "styled-components";

export const Job = styled.div`
    padding-top: 4.5vh;
    font-size: calc(16px + 0.3vw);
    padding-left: 1vh;
    overflow:hidden;
`

export const MetaDeta = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ImageContainer = styled.div`
    max-height: calc(3 * (16px + 0.3vw) + 1vh);
    max-width: calc(3 * (16px + 0.3vw) + 1vh);  
    margin-left: auto;
    margin-right: 2.3vw;
`

export const Details = styled.div`
    display: block;
`

export const Company = styled.p`
    font-weight: 700;
`

export const Position = styled.p`
    font-style: italic;
`

export const DateFromTo = styled.p`
    font-size: calc(12px + 0.2vw);
    font-style: italic;
`

export const Description = styled.div`
    padding-top: 1vh;
    font-size: calc(16px + 0.2vw);
`

export const VideoContainer = styled.div`
    padding: 1vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`