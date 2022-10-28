import * as React from 'react';
import { Container, PageLink, Nav, UnorderedList, ListItem } from '../sc/navbar';

const Navbar = () => {
    return(
        <Container>
            <Nav>
                <UnorderedList>
                    <ListItem><PageLink to='/'>Home</PageLink></ListItem>
                    <ListItem><PageLink to='/contact'>Contact</PageLink></ListItem>
                </UnorderedList>
            </Nav>
        </Container>
    )
}

export default Navbar