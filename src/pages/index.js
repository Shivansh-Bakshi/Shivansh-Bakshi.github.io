import * as React from 'react';
import Layout from '../components/layout';
import Typewriter from "typewriter-effect";
import { Container, Body, Footer, Header, Message, Waves } from '../sc/intro';
import Wave from 'react-wavify';

const IntroComponent = () => {
    return(
        <Container>
            <Message>
                <Header>Hi! I am</Header>
                <Body>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString(" Shivansh Bakshi")
                        .start()
                    }}
                    />
                </Body>
                <Footer>Undergrad | CS | Developer | Pianist</Footer>
            </Message>
        </Container>
    )
}

const IndexPage = () => {
    return(
        <div>
            <IntroComponent />
            <Layout>
                <p>Hi!</p>
            </Layout>
        </div>

    )
}

export const Head = () => {
    return(
        <title>Shivansh Bakshi | CS</title>
    )
}

export default IndexPage