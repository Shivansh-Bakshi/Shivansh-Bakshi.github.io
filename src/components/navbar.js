import * as React from 'react';
import { Container, PageLink, Nav, UnorderedList, ListItem, ResumeLink } from '../sc/navbar';

const Navbar = ( {fixedToTop} ) => {
    return(
        <Container top={fixedToTop}>
            <Nav>
                <UnorderedList>
                    <ListItem><PageLink to='/'>Home</PageLink></ListItem>
                    <ListItem><ResumeLink href='Resume.pdf'>Resume</ResumeLink></ListItem>
                </UnorderedList>
            </Nav>
        </Container>
    )
}

export default Navbar