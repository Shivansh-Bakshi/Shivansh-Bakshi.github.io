import * as React from 'react';
import { CanvasContainer, Container, GlobalStyle, Overlay, SubOverlay } from '../styles/global';
import ContextConsumer, { SubOverlayContextProvider } from '../contexts/subOverlay';
import InitialTransition from './initialTransition';
import Navbar from './navbar';
import Footer from './footer';
import PageTransition from './PageTransition';

const Background = React.lazy(() => import('./background'));

const Layout = props => {
    return(
        <>
            <GlobalStyle />
            <SubOverlayContextProvider>
                <InitialTransition />
                <ContextConsumer>
                    {({ data }) => (<SubOverlay {...data}/>)}
                </ContextConsumer>
                
                <Navbar />
                <React.Suspense>
                    <CanvasContainer>
                        <Background />
                    </CanvasContainer>
                </React.Suspense>
                <Overlay />

                <PageTransition animationKey={props.location.pathname}>
                    <Container>
                            {props.children}
                    </Container>
                </PageTransition>
                                
                <Footer />
            </SubOverlayContextProvider>
        </>
    )
}

export default Layout