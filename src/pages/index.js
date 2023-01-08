import * as React from 'react';
import { ButtonContainer, Emphasis, ProgressivePortrait, ResumeLink, TextContainer } from '../styles/indexPage.js';
import { BodyContainerNCol, ColumnContainer, RowContainer } from '../styles/global';
import { useMediaQuery } from '../utils/hooks';

import PortraitImage from '../images/portrait.png';
import PlaceholderImage from '../images/placeholder.png';
import { MAX_WIDTH } from '../styles/device.js';

const INTROL1 = 'Hey There!';
const INTROL2 = "I'm ";
const FIRST_NAME = 'Shivansh ';
const LAST_NAME = 'Bakshi';
const DESCRIPTION = 'A passionate developer with a knack for learning new technologies and building beautiful solutions.';
const DOWNLOAD_CV = 'Download CV';

const IndexPage = () => {
    const isTablet = useMediaQuery(MAX_WIDTH.TABLET)

    if (isTablet) {
        return(
            <BodyContainerNCol n={1}>
                <RowContainer>
                    <TextContainer>{INTROL1}<br />{INTROL2}</TextContainer>
                    <Emphasis red>{FIRST_NAME}</Emphasis><Emphasis>{LAST_NAME}<br /></Emphasis>
                    <TextContainer>{DESCRIPTION}</TextContainer>
                    <ButtonContainer>
                        <ResumeLink href='/Resume.pdf'>{DOWNLOAD_CV}</ResumeLink>
                    </ButtonContainer>
                </RowContainer>

                <RowContainer>
                    <ProgressivePortrait 
                        src={PortraitImage}
                        placeholderSrc={PlaceholderImage}
                    />
                </RowContainer>
            </BodyContainerNCol>
        )
    }
    return (
        <BodyContainerNCol n={2}>
            <ColumnContainer>
                <RowContainer>
                    <TextContainer>{INTROL1}<br />{INTROL2}</TextContainer>
                    <Emphasis red>{FIRST_NAME}</Emphasis><Emphasis>{LAST_NAME}<br /></Emphasis>
                    <TextContainer>{DESCRIPTION}</TextContainer>
                    <ButtonContainer>
                        <ResumeLink href='/Resume.pdf'>{DOWNLOAD_CV}</ResumeLink>
                    </ButtonContainer>
                </RowContainer>
            </ColumnContainer>
            
            <ColumnContainer>
                <ProgressivePortrait 
                    src={PortraitImage}
                    placeholderSrc={PlaceholderImage}
                />
            </ColumnContainer>
        </BodyContainerNCol>
    )
}

export const Head = () => {
    return (
        <title>Shivansh Bakshi</title>
    )
}

export default IndexPage