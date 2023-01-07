import * as React from 'react';
import { CanvasContainer, Container, GlobalStyle, Overlay, SubOverlay } from '../styles/global';
import ContextConsumer, { SubOverlayContextProvider } from '../contexts/subOverlay';
import InitialTransition from './initialTransition';
import Navbar from './navbar';
import Footer from './footer';
import PageTransition from './PageTransition';

const Background = React.lazy(() => import('./background'));

const Layout = props => {
    React.useEffect(() => {
        console.log("mount");
        return(() => {
            console.log("unmount");
        })
      }, [])

    return(
        <>
            <GlobalStyle />
            <SubOverlayContextProvider>
                <InitialTransition />
                <Navbar />
                <ContextConsumer>
                    {({ data }) => (<SubOverlay visible={data.visible} />)}
                </ContextConsumer>
                <React.Suspense>
                    <CanvasContainer>
                        <Background />
                    </CanvasContainer>
                </React.Suspense>
                <Overlay />

                <Container key={"container-" + props.location.pathname }>
                    <PageTransition {...props}>
                        {props.children}
                        </PageTransition>
                </Container>
                                
                <Footer />
            </SubOverlayContextProvider>
        </>
    )
}

export default Layout