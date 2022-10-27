import * as React from 'react';
import { Container, PageLink, Nav, PageTitle, UnorderedList, ListItem } from '../sc/navbar';

const Navbar = ({ pageTitle }) => {
    return(
        <Container>
            <PageTitle>{pageTitle}</PageTitle>
            <Nav>
                <UnorderedList>
                    <ListItem><PageLink to='/'>Home</PageLink></ListItem>
                    <ListItem><PageLink to='/about'>About</PageLink></ListItem>
                </UnorderedList>
            </Nav>
        </Container>
    )
}

export default Navbar