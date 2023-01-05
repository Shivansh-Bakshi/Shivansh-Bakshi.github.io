import * as React from 'react';
import { Container, GlobalStyle, Overlay, SubOverlay } from '../styles/global';
import Footer from './footer';
import Navbar from './navbar';
import ContextConsumer, { SubOverlayContextProvider } from '../contexts/subOverlay';

const Background = React.lazy(() => import('./background'));

const Layout = ({ children }) => {
    return(
        <>
            <GlobalStyle />
            <SubOverlayContextProvider>
            <Container>
                <Overlay />
                <ContextConsumer>
                    {({ data }) => (<SubOverlay visible={data.visible} />)}
                </ContextConsumer>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Background />
                </React.Suspense>
                    <Navbar />

                    {children}
                    
                    <Footer />
            </Container>
            </SubOverlayContextProvider>
        </>
    )
}

export default Layout