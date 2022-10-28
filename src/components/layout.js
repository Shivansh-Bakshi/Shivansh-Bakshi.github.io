import * as React from 'react';
import { Container } from '../sc/body';
import { GlobalStyle } from '../sc/global';
import Navbar from './navbar';

const Layout = ({children}) => {
    

    return(
        <div>
            <GlobalStyle />
            <Navbar />
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Layout