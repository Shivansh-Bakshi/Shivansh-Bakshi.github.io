import * as React from 'react';
import Layout from '../components/layout';
import Typewriter from "typewriter-effect";
import { Container, IntroBody, IntroFooter, IntroHeader, IntroMessage } from '../sc/intro';

const IntroComponent = () => {
    return(
        <Container>
            <IntroMessage>
                <IntroHeader>Hi! I am</IntroHeader>
                <IntroBody>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString(" Shivansh Bakshi")
                        .start()
                    }}
                    />
                </IntroBody>
                <IntroFooter>An Avid Computer Science student, who loves to create things</IntroFooter>
            </IntroMessage>
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