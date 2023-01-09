import * as React from 'react';
import { CanvasContainer, Container, GlobalStyle, Overlay, SubOverlay } from '../styles/global';
import SubOverlayContextConsumer, { SubOverlayContextProvider } from '../contexts/subOverlay';
import InitialTransition from './initialTransition';
import Navbar from './navbar';
import Footer from './footer';
import PageTransition from './PageTransition';
import { transitionEffects } from '../styles/constants';
import VideoOverlayContextConsumer, { VideoOverlayContextProvider } from '../contexts/videoOverlay';
import VideoComponent from './video';

const Background = React.lazy(() => import('./background'));

const backgroundVariants = {
    initial: {
        height: '0vh'
    },
    animate: {
        height: '100vh',
        transition: transitionEffects
    }
}

const Layout = props => {
    return(
        <>
            <GlobalStyle />
            <SubOverlayContextProvider>
                <VideoOverlayContextProvider>
                <InitialTransition />
                <SubOverlayContextConsumer>
                    {({ data }) => (<SubOverlay {...data}/>)}
                </SubOverlayContextConsumer>
                
                <Navbar />
                <React.Suspense>
                    <CanvasContainer
                    initial="initial"
                    animate="animate"
                    variants={backgroundVariants}>
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
                <VideoOverlayContextConsumer>
                    {({data, set}) => (<VideoComponent {...data} set={set} />)}
                </VideoOverlayContextConsumer>
                </VideoOverlayContextProvider>
            </SubOverlayContextProvider>

        </>
    )
}

export default Layout