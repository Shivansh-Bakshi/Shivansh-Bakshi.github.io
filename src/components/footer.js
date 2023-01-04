import * as React from 'react';
import { ExposeFooterIcon, ExposeFooterIconContainer, FooterContainer, MainFooter } from '../styles/footer';
import UpIcon from '../images/up.svg';
import DownIcon from '../images/down.svg';
import { transitionEffects } from '../styles/constants';

const Footer = () => {
    const [showFooter, setShowFooter] = React.useState(false);

    const handleShowFooter = () => {
        setShowFooter(!showFooter);
    }

    const footer = {
        inital: {
            height: '0'
        },
        animate: {
            height: showFooter ? '10vh' : '0'
        },
        transition: transitionEffects
    }

    return(
        <FooterContainer>
            <ExposeFooterIconContainer onClick={handleShowFooter}>
                <ExposeFooterIcon src={showFooter ? DownIcon : UpIcon} alt='Arrow' />
            </ExposeFooterIconContainer>
            <MainFooter initial="initial" animate="animate" variants={footer}>

            </MainFooter>
        </FooterContainer>
    )
}

export default Footer;