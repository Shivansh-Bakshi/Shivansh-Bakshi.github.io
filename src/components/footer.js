import * as React from 'react';
import { ExposeFooterIcon, ExposeFooterIconContainer, FooterContainer, MainFooter } from '../styles/footer';
import UpIcon from '../images/up.svg';
import DownIcon from '../images/down.svg';

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
        transition: {
            duration: 0.3,
            ease: [0.87, 0, 0.13, 1]
        }
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