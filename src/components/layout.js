import * as React from 'react';
import { CanvasContainer, Container, GlobalStyle, Overlay, SubOverlay } from '../styles/global';
import ContextConsumer, { SubOverlayContextProvider } from '../contexts/subOverlay';
import InitialTransition from './initialTransition';
import Navbar from './navbar';
import Footer from './footer';

const Background = React.lazy(() => import('./background'));

const Layout = ({ children }) => {
    return(
        <>
            <GlobalStyle />
            <SubOverlayContextProvider>
                <InitialTransition />
                <Navbar />
                <ContextConsumer>
                    {({ data }) => (<SubOverlay visible={data.visible} />)}
                </ContextConsumer>

                <React.Suspense fallback={<div>Loading...</div>}>
                    <CanvasContainer>
                        <Background />
                    </CanvasContainer>
                </React.Suspense>
                <Overlay />

                <Container>
                    {children}
                </Container>
                
                <Footer />
            </SubOverlayContextProvider>
        </>
    )
}

export default Layout