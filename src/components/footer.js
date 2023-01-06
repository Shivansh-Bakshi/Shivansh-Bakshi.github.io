import * as React from 'react';
import { ExposeFooterIcon, ExposeFooterIconContainer, FooterContainer, FooterImage, FooterText, MainFooter, SocialsContainer, TextWithImage } from '../styles/footer';
import UpIcon from '../images/up.svg';
import DownIcon from '../images/down.svg';
import { useIsOutsideClick, useMediaQuery } from '../utils/hooks';
import ContextConsumer from '../contexts/subOverlay';
import { SocialIcon } from 'react-social-icons';
import { colors, device } from '../styles/constants';

import Heart from '../images/heart.png';

const FooterComponent = ({ data, set }) => {
    const [showFooter, setShowFooter] = React.useState(false);
    const wrapperRef = React.useRef(null);
    const isMobile = useMediaQuery(device.MEDIUM_SCREEN);

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
            height: showFooter ? '10vh' : '0'
        },
    }

    return(
        <FooterContainer>
            <ExposeFooterIconContainer onClick={handleShowFooter} ref={wrapperRef}>
                <ExposeFooterIcon src={showFooter ? DownIcon : UpIcon} alt='Arrow' />
            </ExposeFooterIconContainer>
            <MainFooter initial="initial" animate="animate" variants={footer}>
                <SocialsContainer>
                    <FooterText>Contact Me:</FooterText>
                    <SocialIcon
                        bgColor='transparent'
                        fgColor={colors.DARK_BLUE}
                        url='mailto:shivansh.bakshi@gmail.com' 
                        style={{
                            width: isMobile ? 40 : 50,
                        }} />
                    <SocialIcon
                        bgColor='transparent'
                        fgColor={colors.DARK_BLUE}
                        url='https://www.linkedin.com/in/shivansh-bakshi' 
                        style={{
                            width: isMobile ? 40 : 50,
                        }}/ >
                    <SocialIcon 
                        bgColor='transparent'
                        fgColor={colors.DARK_BLUE}
                        url='https://github.com/Shivansh-Bakshi' 
                        style={{
                            width: isMobile ? 40 : 50,
                        }} />
                    <SocialIcon 
                        bgColor='transparent'
                        fgColor={colors.DARK_BLUE}
                        url='https://www.instagram.com/shivansh.bakshi/'
                        style={{
                            width: isMobile ? 40 : 50,
                        }} />
                </SocialsContainer>
                <TextWithImage>
                    <FooterText style={{ marginRight: '10px' }}>This site uses cookies. Made with</FooterText>
                    <FooterImage src={Heart} alt='Heart' />
                    <FooterText style={{ marginLeft: '10px' }}> using React w/ Gatsby</FooterText>
                </TextWithImage>
            </MainFooter>
        </FooterContainer>
    )
}

const Footer = () => {
    return(
        <ContextConsumer>
            {({ data, set }) => (
                <FooterComponent data={data} set={set} />
            )}
        </ContextConsumer>
    )
}

export default Footer;