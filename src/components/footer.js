import * as React from 'react';
import { ExposeFooterIcon, ExposeFooterIconContainer, FooterContainer, MainFooter } from '../styles/footer';
import UpIcon from '../images/up.svg';
import DownIcon from '../images/down.svg';
import { useIsOutsideClick } from '../utils/hooks';
import ContextConsumer from '../contexts/subOverlay';

const FooterComponent = ({ data, set }) => {
    const [showFooter, setShowFooter] = React.useState(false);
    const wrapperRef = React.useRef(null);

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
        <>
        <FooterContainer>
            <ExposeFooterIconContainer onClick={handleShowFooter} ref={wrapperRef}>
                <ExposeFooterIcon src={showFooter ? DownIcon : UpIcon} alt='Arrow' />
            </ExposeFooterIconContainer>
            <MainFooter initial="initial" animate="animate" variants={footer}>

            </MainFooter>
        </FooterContainer>
        </>
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