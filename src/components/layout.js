import * as React from 'react';
import { CanvasContainer, Container, GlobalStyle, Overlay, SubOverlay } from '../styles/global';
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