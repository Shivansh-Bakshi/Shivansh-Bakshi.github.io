import * as React from 'react';
import { LogoContainer, LeftContainer, ListItem, PageLink, RightContainer, UnorderedList, RightMenu, HamburgerImage, LeftMenu, LogoImage, ResumeLink } from '../styles/navbar';
import LogoSVG from '../images/Logo.svg';
import { NavbarContainer } from '../styles/global';
import  RightHamburger from '../images/right_hamburger.svg';
import  LeftHamburger from '../images/left_hamburger.svg';


const LeftNavbar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return(
        <>
        <LeftContainer showNavbar={showNavbar}>
            <UnorderedList>
                <ListItem><PageLink to="/blog" activeClassName='active'>Blog</PageLink></ListItem>
                <ListItem><PageLink to="/piano" activeClassName='active'>Piano</PageLink></ListItem>
            </UnorderedList>
        </LeftContainer>
        <LeftMenu onClick={handleShowNavbar}>
            <HamburgerImage src={LeftHamburger} alt='left_hamburger' />
        </LeftMenu>
        </>
    )
}

const RightNavbar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return(
        <>
        <RightContainer showNavbar={showNavbar}>
            <UnorderedList>
                <ListItem><PageLink to="/" activeClassName='active'>Home</PageLink></ListItem>
                <ListItem><PageLink to="/experience" activeClassName='active'>Experience</PageLink></ListItem>
                <ListItem><PageLink to="/projects" activeClassName='active'>Projects</PageLink></ListItem>
                <ListItem><PageLink to="/certificates" activeClassName='active'>Certificates</PageLink></ListItem>
                <ListItem><ResumeLink href='/Resume.pdf'>Resume</ResumeLink></ListItem>
                <ListItem><PageLink to="/contact" activeClassName='active'>Contact</PageLink></ListItem>
            </UnorderedList>
        </RightContainer>
        <RightMenu onClick={handleShowNavbar}>
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
                <LeftNavbar />
                <RightNavbar />
                <Logo />
            </NavbarContainer>
        </nav>
    )
}

export default Navbar;