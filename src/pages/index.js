import * as React from 'react';
import { ButtonContainer, Emphasis, Portrait, ResumeLink, TextContainer } from '../styles/indexPage.js';
import { BodyContainerNCol, ColNContainer, RowNContainer } from '../styles/global';
import { useMediaQuery } from '../utils/hooks';

import PortraitImage from '../images/portrait.png';
import { device } from '../styles/constants.js';

const INTROL1 = 'Hey There!';
const INTROL2 = "I'm ";
const FIRST_NAME = 'Shivansh ';
const LAST_NAME = 'Bakshi';
const DESCRIPTION = 'A passionate developer with a knack for learning new technologies and building beautiful solutions.';
const DOWNLOAD_CV = 'Download CV';

const IndexPage = () => {
    const isMobile = useMediaQuery(device.MEDIUM_SCREEN)

    if (isMobile) {
        return(
            <BodyContainerNCol n={1}>
                <RowNContainer n={1}>
                    <TextContainer>{INTROL1}<br />{INTROL2}</TextContainer>
                    <Emphasis red>{FIRST_NAME}</Emphasis><Emphasis>{LAST_NAME}<br /></Emphasis>
                    <TextContainer>{DESCRIPTION}</TextContainer>
                    <ButtonContainer>
                        <ResumeLink href='/Resume.pdf'>{DOWNLOAD_CV}</ResumeLink>
                    </ButtonContainer>
                </RowNContainer>

                <RowNContainer n={2}>
                    <Portrait src={PortraitImage} alt='Portrait Of Shivansh Bakshi' />
                </RowNContainer>
            </BodyContainerNCol>
        )
    }
    return (
        <BodyContainerNCol n={2}>
            <ColNContainer n={1}>
                <RowNContainer n={1}>
                    <TextContainer>{INTROL1}<br />{INTROL2}</TextContainer>
                    <Emphasis red>{FIRST_NAME}</Emphasis><Emphasis>{LAST_NAME}<br /></Emphasis>
                </RowNContainer>
                <RowNContainer n={2}>
                    <TextContainer>{DESCRIPTION}</TextContainer>
                </RowNContainer>
                <RowNContainer n={3}>
                    <ButtonContainer>
                        <ResumeLink href='/Resume.pdf'>{DOWNLOAD_CV}</ResumeLink>
                    </ButtonContainer>
                </RowNContainer>
            </ColNContainer>
            
            <ColNContainer n={2}>
                <Portrait src={PortraitImage} alt='Portrait Of Shivansh Bakshi' />
            </ColNContainer>
        </BodyContainerNCol>
    )
}

export const Head = () => {
    return (
        <title>Shivansh Bakshi</title>
    )
}

export default IndexPage