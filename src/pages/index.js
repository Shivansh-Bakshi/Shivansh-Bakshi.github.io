import * as React from 'react';
import { HomeButtonContainer, HomeEmphasis, HomeProgressivePortrait, HomeResumeLink, HomeTextContainer } from '../styles';
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

    const buttonAnimation = {
        whileHover: {scale: 1.1},
        whileTap: {scale: 0.9}
    }

    if (isTablet) {
        return(
            <BodyContainerNCol n={1}>
                <RowContainer>
                    <HomeTextContainer>{INTROL1}<br />{INTROL2}</HomeTextContainer>
                    <HomeEmphasis red>{FIRST_NAME}</HomeEmphasis><HomeEmphasis>{LAST_NAME}<br /></HomeEmphasis>
                    <HomeTextContainer>{DESCRIPTION}</HomeTextContainer>
                    <HomeButtonContainer {...buttonAnimation}>
                        <HomeResumeLink href='/Resume.pdf'>{DOWNLOAD_CV}</HomeResumeLink>
                    </HomeButtonContainer>
                </RowContainer>

                <RowContainer>
                    <HomeProgressivePortrait 
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
                    <HomeTextContainer>{INTROL1}<br />{INTROL2}</HomeTextContainer>
                    <HomeEmphasis red>{FIRST_NAME}</HomeEmphasis><HomeEmphasis>{LAST_NAME}<br /></HomeEmphasis>
                    <HomeTextContainer>{DESCRIPTION}</HomeTextContainer>
                    <HomeButtonContainer {...buttonAnimation}>
                        <HomeResumeLink href='/Resume.pdf'>{DOWNLOAD_CV}</HomeResumeLink>
                    </HomeButtonContainer>
                </RowContainer>
            </ColumnContainer>
            
            <ColumnContainer>
                <HomeProgressivePortrait 
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