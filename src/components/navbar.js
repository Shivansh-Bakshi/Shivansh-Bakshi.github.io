import * as React from 'react';
import { 
    NavbarLogoContainer, 
    NavbarLeftContainer, 
    NavbarListItem, 
    NavbarPageLink, 
    NavbarRightContainer, 
    NavbarContainer, 
    NavbarNavigationList, 
    NavbarRightMenu, 
    NavbarHamburgerImage, 
    NavbarLeftMenu, 
    NavbarLogoImage,
} from '../styles';
import LogoSVG from '../images/Logo.svg';
import  RightHamburger from '../images/right_hamburger.svg';
import  LeftHamburger from '../images/left_hamburger.svg';
import { useIsOutsideClick, useMediaQuery } from '../utils/hooks';
import SubOverlayContextConsumer from '../contexts/subOverlay';
import { MAX_WIDTH } from '../styles/device';
import { Link } from 'gatsby';

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
    } : {
        style: {
            width: 'auto'
        }
    }

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
            <NavbarLeftContainer {...containerProps}>
                <NavbarNavigationList>
                    <NavbarListItem><NavbarPageLink to="/blog" activeClassName='active'>Blog</NavbarPageLink></NavbarListItem>
                    <NavbarListItem><NavbarPageLink to="/piano" activeClassName='active'>Piano</NavbarPageLink></NavbarListItem>
                </NavbarNavigationList>
            </NavbarLeftContainer>
            <NavbarLeftMenu onClick={handleShowNavbar} ref={wrapperRef}>
                <NavbarHamburgerImage src={LeftHamburger} alt='left_hamburger' />
            </NavbarLeftMenu>
            </>
        )
    }

    return (
        <>
        <NavbarRightContainer {...containerProps}>
            <NavbarNavigationList>
                <NavbarListItem><NavbarPageLink to="/" activeClassName='active'>Home</NavbarPageLink></NavbarListItem>
                <NavbarListItem><NavbarPageLink to="/experience" activeClassName='active'>Experience</NavbarPageLink></NavbarListItem>
                <NavbarListItem><NavbarPageLink to="/projects" activeClassName='active'>Projects</NavbarPageLink></NavbarListItem>
                <NavbarListItem><NavbarPageLink to="/certificates" activeClassName='active'>Certificates</NavbarPageLink></NavbarListItem>
                <NavbarListItem><NavbarPageLink to="/contact" activeClassName='active'>Contact</NavbarPageLink></NavbarListItem>
            </NavbarNavigationList>
        </NavbarRightContainer>
        <NavbarRightMenu onClick={handleShowNavbar} ref={wrapperRef}>
            <NavbarHamburgerImage src={RightHamburger} alt='right_hamburger' />
        </NavbarRightMenu>

        </>
    )
}

const Logo = () => {
    return(
        <NavbarLogoContainer>
            <Link to='/'>
            <NavbarLogoImage src={LogoSVG} alt='logo' />
            </Link>
        </NavbarLogoContainer>
    )
}

const Navbar = () => {
    return(
        <nav>
            <NavbarContainer>
                <SubOverlayContextConsumer>
                    {({ data, set }) => (
                        <>
                        <SubNavbar direction='left' data={data} set={set} />
                        <SubNavbar direction='right' data={data} set={set} />
                        </>
                    )}
                </SubOverlayContextConsumer>
                <Logo />
            </NavbarContainer>
        </nav>
    )
}

export default Navbar;