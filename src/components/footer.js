import * as React from 'react';
import {
    FooterExposeIcon,
    FooterExposeIconContainer,
    FooterContainer,
    FooterImage,
    FooterText,
    FooterCore,
    FooterSocialsContainer,
    FooterInlineTextContainer
} from '../styles';
import UpIcon from '../images/up.svg';
import DownIcon from '../images/down.svg';
import { useIsOutsideClick, useMediaQuery } from '../utils/hooks';
import SubOverlayContextConsumer from '../contexts/subOverlay';
import { SocialIcon } from 'react-social-icons';
import { colors } from '../styles/constants';

import Heart from '../images/heart.png';
import { MAX_WIDTH } from '../styles/device';

const FooterComponent = ({ data, set }) => {
    const [showFooter, setShowFooter] = React.useState(false);
    const wrapperRef = React.useRef(null);
    const isTablet = useMediaQuery(MAX_WIDTH.TABLET);

    const handleOutsideClick = () => {
        if (showFooter) {
            setShowFooter(false);
            set({visible: false});
        }
    }

    useIsOutsideClick(wrapperRef, handleOutsideClick);

    const handleShowFooter = () => {
        setShowFooter(!showFooter);
        set({visible: !data.visible});
    }

    const footer = {
        inital: {
            height: '0'
        },
        animate: {
            height: showFooter ? '15vh' : '0'
        },
    }

    return(
        <FooterContainer>
            <FooterExposeIconContainer onClick={handleShowFooter}>
                <FooterExposeIcon src={showFooter ? DownIcon : UpIcon} alt='Arrow' />
            </FooterExposeIconContainer>
            <FooterCore initial="initial" animate="animate" variants={footer} ref={wrapperRef}>
                <FooterSocialsContainer>
                    <FooterText style={{opacity: '1', marginTop: 'auto', marginBottom: 'auto'}}>Contact Me:</FooterText>
                    <SocialIcon
                        bgColor='transparent'
                        fgColor={colors.DARK_BLUE}
                        url='mailto:shivansh.bakshi@gmail.com' 
                        style={{
                            width: isTablet ? 40 : 50,
                        }} />
                    <SocialIcon
                        bgColor='transparent'
                        fgColor={colors.DARK_BLUE}
                        url='https://www.linkedin.com/in/shivansh-bakshi' 
                        style={{
                            width: isTablet ? 40 : 50,
                        }}/ >
                    <SocialIcon 
                        bgColor='transparent'
                        fgColor={colors.DARK_BLUE}
                        url='https://github.com/Shivansh-Bakshi' 
                        style={{
                            width: isTablet ? 40 : 50,
                        }} />
                    <SocialIcon 
                        bgColor='transparent'
                        fgColor={colors.DARK_BLUE}
                        url='https://www.instagram.com/shivansh.bakshi/'
                        style={{
                            width: isTablet ? 40 : 50,
                        }} />
                </FooterSocialsContainer>
                <FooterText>This site uses essential cookies<br /></FooterText>
                <FooterInlineTextContainer>
                    <FooterText style={{ marginRight: '10px' }}>Made with</FooterText>
                    <FooterImage src={Heart} alt='Heart' />
                    <FooterText style={{ marginLeft: '10px' }}> using React w/ Gatsby</FooterText>
                </FooterInlineTextContainer>
                <FooterText>© 2022-2023 Shivansh Bakshi</FooterText>
            </FooterCore>
        </FooterContainer>
    )
}

const Footer = () => {
    return(
        <SubOverlayContextConsumer>
            {({ data, set }) => (
                <FooterComponent data={data} set={set} />
            )}
        </SubOverlayContextConsumer>
    )
}

export default Footer;