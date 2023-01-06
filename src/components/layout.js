import * as React from 'react';
import { CanvasContainer, Container, GlobalStyle, Overlay, SubOverlay } from '../styles/global';
import ContextConsumer, { SubOverlayContextProvider } from '../contexts/subOverlay';
import InitialTransition from './initialTransition';

const Background = React.lazy(() => import('./background'));
const Navbar = React.lazy(() => import('./navbar'));
const Footer = React.lazy(() => import('./footer'))

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
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Navbar />                
                        <Footer />
                    </React.Suspense>
                </Container>
            </SubOverlayContextProvider>
        </>
    )
}

export default Layout