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
                <Container>
                    <InitialTransition />
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <CanvasContainer>
                            <Background />
                        </CanvasContainer>
                    </React.Suspense>
                    <Overlay />

                    {children}
                    
                    <ContextConsumer>
                        {({ data }) => (<SubOverlay visible={data.visible} />)}
                    </ContextConsumer>
                    <Navbar />                
                    <Footer />
                </Container>
            </SubOverlayContextProvider>
        </>
    )
}

export default Layout