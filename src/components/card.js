import * as React from 'react';
import { Container } from '../sc/card';

const Card = ({ children }) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default Card