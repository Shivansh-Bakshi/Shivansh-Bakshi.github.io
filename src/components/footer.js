import * as React from 'react';
import { ExposeFooterIcon, ExposeFooterIconContainer, FooterContainer, FooterImage, FooterText, MainFooter, SocialsContainer, TextWithImage } from '../styles/footer';
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
            <ExposeFooterIconContainer onClick={handleShowFooter} ref={wrapperRef}>
                <ExposeFooterIcon src={showFooter ? DownIcon : UpIcon} alt='Arrow' />
            </ExposeFooterIconContainer>
            <MainFooter initial="initial" animate="animate" variants={footer}>
                <SocialsContainer>
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
                </SocialsContainer>
                <FooterText>This site uses essential cookies<br /></FooterText>
                <TextWithImage>
                    <FooterText style={{ marginRight: '10px' }}>Made with</FooterText>
                    <FooterImage src={Heart} alt='Heart' />
                    <FooterText style={{ marginLeft: '10px' }}> using React w/ Gatsby</FooterText>
                </TextWithImage>
                <FooterText>© 2022-2023 Shivansh Bakshi</FooterText>
            </MainFooter>
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