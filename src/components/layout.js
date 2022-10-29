import * as React from 'react';
import { Container } from '../sc/body';
import { GlobalStyle } from '../sc/global';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ navbarFixedToTop = true, children }) => {
    return(
        <div>
            <GlobalStyle />
            <Navbar fixedToTop={navbarFixedToTop}/>
            <Container navbarFixed={navbarFixedToTop}>
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout