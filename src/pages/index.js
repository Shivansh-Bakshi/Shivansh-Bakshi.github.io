import * as React from 'react';
import Layout from '../components/layout';
import Typewriter from "typewriter-effect";
import { Container, Body, Footer, Header, Message } from '../sc/intro';
import Card from '../components/card';
import { useVisibility } from '../utils/hooks';
import { Company, DateFromTo, Description, Details, ImageContainer, Job, MetaDeta, Position, VideoContainer} from '../sc/experiences';
import { PlainCard, Title } from '../sc/card';

import { StaticImage } from 'gatsby-plugin-image';
import { Project, ProjectDate, ProjectDescription, ProjectTitle } from '../sc/projects';

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
                                    title="Automated Warehouse Demonstration" 
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

                <Card>
                    <Title>Projects</Title>
                    <Project>
                        <ProjectTitle>My Website</ProjectTitle>
                        <ProjectDate>October 2022</ProjectDate>
                        <ProjectDescription>
                            Started developing my personal website in React JS with Gatsby for fast, efficient static performance.
                            The website currently acts as a portfolio website with features planned for the future as mentioned 
                            previously.
                        </ProjectDescription>
                    </Project>

                    <Project>
                        <ProjectTitle>Raw Audio to MIDI Convertor</ProjectTitle>
                        <ProjectDate>2021</ProjectDate>
                        <ProjectDescription>
                            Developed a desktop app using QT/C++ that processes real-time audio signals and runs Yin-FFT on them to
                            create MIDI files for monophonic melodies.<br/>
                            <br />
                            Git Repository: <a href='https://github.com/Shivansh-Bakshi/NoteDetection'>Click Here</a>
                            <VideoContainer>
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    src="https://www.youtube.com/embed/1x7OmF7IUi8" 
                                    title="Note Detection Demonstration" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen="allowfullscreen"
                                    mozallowfullscreen="mozallowfullscreen" 
                                    msallowfullscreen="msallowfullscreen" 
                                    oallowfullscreen="oallowfullscreen" 
                                    webkitallowfullscreen="webkitallowfullscreen"
                                ></iframe>
                            </VideoContainer>
                        </ProjectDescription>
                    </Project>

                    <Project>
                        <ProjectTitle>Android Billing System for Factories</ProjectTitle>
                        <ProjectDate>2021</ProjectDate>
                        <ProjectDescription>
                            Designed a React Native + Android studio app with custom file, permissions, and SQLite handlers to ease
                            the billing process using templatized PDFs. Created for a friends company.

                            <VideoContainer>
                            <iframe 
                                    width="560" 
                                    height="315" 
                                    src="https://www.youtube.com/embed/CMZPWKDPfRE" 
                                    title="Android Billing App" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen="allowfullscreen"
                                    mozallowfullscreen="mozallowfullscreen" 
                                    msallowfullscreen="msallowfullscreen" 
                                    oallowfullscreen="oallowfullscreen" 
                                    webkitallowfullscreen="webkitallowfullscreen"
                                ></iframe>
                            </VideoContainer>
                        </ProjectDescription>
                    </Project>
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