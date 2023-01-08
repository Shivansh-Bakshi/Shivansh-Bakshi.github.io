import * as React from 'react';
import { 
    LogoContainer, 
    LeftContainer, 
    ListItem, 
    PageLink, 
    RightContainer, 
    NavbarContainer, 
    UnorderedList, 
    RightMenu, 
    HamburgerImage, 
    LeftMenu, 
    LogoImage
} from '../styles/navbar';
import LogoSVG from '../images/Logo.svg';
import  RightHamburger from '../images/right_hamburger.svg';
import  LeftHamburger from '../images/left_hamburger.svg';
import { useIsOutsideClick, useMediaQuery } from '../utils/hooks';
import ContextConsumer from '../contexts/subOverlay';
import { MAX_WIDTH } from '../styles/device';

const SubNavbar = ({ direction, data, set }) => {
    const [showNavbar, setShowNavbar] = React.useState(false);
    const wrapperRef = React.useRef(null);
    const isLaptop = useMediaQuery(MAX_WIDTH.LAPTOP);

    const subNavbar = {
        initial: {
            width: '0px'
        },
        animate: {
            width: showNavbar ? 'calc(100px + 10vw)' : '0px'
        }
    }
    const containerProps = isLaptop ? {
        initial: "initial",
        animate: "animate",
        variants: subNavbar
    } : {}

    const handleOutsideClick = () => {
        if (showNavbar) {
            setShowNavbar(false);
            set({visible: false});
        }
    }

    useIsOutsideClick(wrapperRef, handleOutsideClick);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
        set({visible: !data.visible});
    }

    if (direction === 'left') {
        return (
            <>
            <LeftContainer {...containerProps}>
                <UnorderedList>
                    <ListItem><PageLink to="/blog" activeClassName='active'>Blog</PageLink></ListItem>
                    <ListItem><PageLink to="/piano" activeClassName='active'>Piano</PageLink></ListItem>
                </UnorderedList>
            </LeftContainer>
            <LeftMenu onClick={handleShowNavbar} ref={wrapperRef}>
                <HamburgerImage src={LeftHamburger} alt='left_hamburger' />
            </LeftMenu>
            </>
        )
    }

    return (
        <>
        <RightContainer {...containerProps}>
            <UnorderedList>
                <ListItem><PageLink to="/" activeClassName='active'>Home</PageLink></ListItem>
                <ListItem><PageLink to="/experience" activeClassName='active'>Experience</PageLink></ListItem>
                <ListItem><PageLink to="/projects" activeClassName='active'>Projects</PageLink></ListItem>
                <ListItem><PageLink to="/certificates" activeClassName='active'>Certificates</PageLink></ListItem>
                <ListItem><PageLink to="/contact" activeClassName='active'>Contact</PageLink></ListItem>
            </UnorderedList>
        </RightContainer>
        <RightMenu onClick={handleShowNavbar} ref={wrapperRef}>
            <HamburgerImage src={RightHamburger} alt='right_hamburger' />
        </RightMenu>

        </>
    )
}

const Logo = () => {
    return(
        <LogoContainer>
            <LogoImage src={LogoSVG} alt='logo' />
        </LogoContainer>
    )
}

const Navbar = () => {
    return(
        <nav>
            <NavbarContainer>
                <ContextConsumer>
                    {({ data, set }) => (
                        <>
                        <SubNavbar direction='left' data={data} set={set} />
                        <SubNavbar direction='right' data={data} set={set} />
                        </>
                    )}
                </ContextConsumer>
                <Logo />
            </NavbarContainer>
        </nav>
    )
}

export default Navbar;