import * as React from 'react';
import Layout from '../components/layout';
import Typewriter from "typewriter-effect";
import { Container, Body, Footer, Header, Message } from '../sc/intro';
import Card from '../components/card';
import { useVisibility } from '../utils/hooks';
import { Company, DateFromTo, Description, Details, ImageContainer, Job, MetaDeta, Position, VideoContainer} from '../sc/experiences';
import { PlainCard, Title } from '../sc/card';

import { StaticImage } from 'gatsby-plugin-image';

const IntroComponent = ({ visibleRef }) => {
    return(
        <Container ref={visibleRef}>
            <Message>
                <Header>Hi! I am</Header>
                <Body>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString("Shivansh Bakshi")
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
    const [isIntroVisible, introElementRef] = useVisibility();

    return(
        <div>
            <IntroComponent visibleRef={introElementRef}/>
            <Layout navbarFixedToTop={!isIntroVisible}>
                <PlainCard>
                    Hi There! My name is Shivansh Bakshi, and I'm currently an undergraduate student in my final year pursuing a
                    Bachelor's degree in Computer Science.<br />
                    <br />
                    I have a keen interest in creating practical software solutions for future convenience. This website serves as
                    my portfolio, demonstrating my experiences and learnings through projects.<br />
                    <br />
                    Future plans for this website include:
                    <ul>
                        <li>A Blog Section where I can pen down articles or activities of interest</li>
                        <li>A Music Section to keep track of (and share :D) my progress on the Piano</li>
                        <li>Anything else that comes along</li>
                    </ul>
                </PlainCard>

                <Card>
                    <Title>Experience</Title>

                    <Job>
                        <MetaDeta>
                            <Details>
                                <Company>Deutsche Bank</Company>
                                <Position>Summer Intern</Position>
                                <DateFromTo>May, 2022 - July 2022</DateFromTo>
                            </Details>
                            <ImageContainer>
                                <StaticImage 
                                    src='../images/companies/db.png'
                                    alt='DB Logo'
                                />
                            </ImageContainer>
                        </MetaDeta>
                        <Description>
                            I designed and developed a performance testing framework for microservices that communicate over Google
                            Cloud Pub/Sub. This allowed the developers to write performance tests for their microservices, which
                            could further be integrated into the CI/CD pipeline for build.<br />
                            <br />
                            The framework provided the developer with complete freedom over the generation of unique test payload
                            for the hundreds of thousands of messages to bombard the microservices with.
                        </Description>
                    </Job>

                    <Job>
                    <MetaDeta>
                            <Details>
                                <Company>Project MANAS</Company>
                                <Position>AI Planning Head</Position>
                                <DateFromTo>May, 2021 - May 2022</DateFromTo>
                            </Details>
                            <ImageContainer>
                                <StaticImage 
                                    src='../images/companies/manas.png'
                                    alt='Manas Logo'
                                />
                            </ImageContainer>
                        </MetaDeta>
                        <Description>
                            Developed an android app using React Native to capture and geo-tag high resolution images with latitude,
                            longitude, and compass orientation, for the Object Detection, Classification, and Localization pipeline
                            for the AUVSI-SUAS competition.
                        </Description>
                    </Job>
                    <Job>
                        <Position>AI Member</Position>
                        <DateFromTo>March, 2020 - May 2021</DateFromTo>
                        <Description>
                            Implemented real-time 2D object detection using CenterNet in TensorFlow-Python, wrapped in ROS to work 
                            with ZED Camera interface, mounted on a self-driving car.
                            <br />
                            <strong>Finalists 13 of Mahindra Rise Prize Driverless Car Challenge</strong>
                        </Description>
                    </Job>

                    <Job>
                        <MetaDeta>
                            <Details>
                                <Company>IIT Bombay - eYRC</Company>
                                <Position>Lead Developer</Position>
                                <DateFromTo>October, 2020 - April 2021</DateFromTo>
                            </Details>
                            <ImageContainer>
                                <StaticImage 
                                    src='../images/companies/eyrc.png'
                                    alt='DB Logo'
                                />
                            </ImageContainer>
                        </MetaDeta>
                        <Description>
                            Developed an automated warehouse system using ROS, simulated in Gazebo, utilizing Image Processing to
                            parse and filter package destinations and priorites, complete with an integrated dashboard over IoT to
                            provide real-time updates on the status of orders and shipment.
                            
                            <VideoContainer>
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/WaC0acVot2A" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen="allowfullscreen"
                                mozallowfullscreen="mozallowfullscreen" 
                                msallowfullscreen="msallowfullscreen" 
                                oallowfullscreen="oallowfullscreen" 
                                webkitallowfullscreen="webkitallowfullscreen"
                                ></iframe>
                            </VideoContainer>

                        </Description>
                    </Job>
                </Card>
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