import * as React from 'react';
import { Container, GlobalStyle, Overlay } from '../styles/global';
import Footer from './footer';
import Navbar from './navbar';

const Background = React.lazy(() => import('./background'));

const Layout = ({ children }) => {
    return(
        <>
            <GlobalStyle />
            <Container>
                <Overlay />
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Background />
                </React.Suspense>
                <Navbar />

                {children}

                <Footer />
            </Container>
        </>
    )
}

export default Layout