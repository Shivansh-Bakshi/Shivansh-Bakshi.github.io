import * as React from 'react';
import { BodyContainerNCol, PageTitle } from '../styles/global';
import { Timeline, TimelineContainer, TimelineEntry, TimelineEntryContainer, TimelineLine, TimelineLineContainer, TimelineMarkerContainer, TimelineMarkerImage } from '../styles/timeline';
import VideoOverlayContextConsumer from '../contexts/videoOverlay';

import DB from '../images/companies/db.png';
import MANAS from '../images/companies/manas.png';
import eYRC from '../images/companies/eyrc.png';

const timelineVariants = {
    container: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    },
    child: {
        initial: {
            opacity: 0,
            x: -50,
            zIndex: 1,
        },
        animate: {
            opacity: 1,
            x: 0,
        }
    }
}

const ExperienceEntry = ({ position, where, when, children }) => {
    return(
        <>
        <h2>{ position }</h2>
        <h4><i>{ where }</i></h4>
        <small>{ when.from } <span>&#8211;</span> { when.to }</small>
        {children}
        </>
    )
}


const TimelineEntryComponent = props => {
    return(
        <VideoOverlayContextConsumer>
            {({ data, set}) => (<TimelineEntryConsumer {...props} data={data} set={set} />)}
        </VideoOverlayContextConsumer>
    )
}

const TimelineEntryConsumer = ({ logo, videoUrl, data, set, children }) => {    
    const handleOnClick = () => {
        set({
            videoUrl: videoUrl,
            visible: true
        })
    }
    
    return(
        <TimelineEntryContainer
            variants={timelineVariants.child}
            onClick={typeof videoUrl != 'undefined' ? handleOnClick : () => {}}>
            <TimelineMarkerContainer>
                <TimelineMarkerImage src={logo} alt='Timeline Marker' />
            </TimelineMarkerContainer>
            <TimelineEntry whileHover={{scale: 1.1}} videoUrl={videoUrl}>
                {children}
                {videoUrl &&
                    <p style={{textAlign: 'center'}}><b>Click for Video Demonstration</b></p>
                }
            </TimelineEntry>
        </TimelineEntryContainer>
    )
}

const ExperiencePage = () => {
    return (
            <BodyContainerNCol n={1}>
                <PageTitle>Experience</PageTitle>
                <TimelineLineContainer>
                    <TimelineLine />
                    <Timeline>
                        <TimelineContainer initial="initial" animate="animate" variants={timelineVariants.container}>
                            <TimelineEntryComponent logo={DB}>
                                <ExperienceEntry
                                    position='Summer Intern'
                                    where='Deutsche Bank'
                                    when={{
                                        from:'May 2022',
                                        to: "July 2022"
                                    }}>
                                        <p>
                                            I designed and developed a Performance Testing Framework compatible with Gatling, 
                                            enabling developers to write tests for Quarkus microservices communicating over 
                                            Google Cloud Pub/Sub.
                                        </p>
                                        <p>
                                            The tests were generalized over the number of microservices being tested. i.e., 
                                            it could test the overall working of any number of microservices if their 
                                            communicating messages had a common identifier.
                                        </p>
                                        <p>
                                            I also had the opportunity to work with automated deployment of services to 
                                            Kubernetes with Skaffold in order to integrate the tests into the CI/CD pipeline.
                                        </p>
                                    </ExperienceEntry>
                            </TimelineEntryComponent>

                            <TimelineEntryComponent logo={MANAS}>
                                <ExperienceEntry
                                    position='AI Planning Head'
                                    where='Project MANAS'
                                    when={{
                                        from:'February 2021',
                                        to: "February 2022"
                                    }}>
                                        <p>
                                            Lead the AI Team for the Object Detection, Classification, and Localisation 
                                            (ODCL) tasks for the AUVSI-SUAS competition, successfully implementing the 
                                            ODCL pipeline to correctly categorize objects on the ground from a height 
                                            of upto 150ft using Computer Vision, Segmentation, and CNNs.
                                        </p>
                                        <p>
                                            Also developed the React Native app to capture and Geo-tag high-resolution 
                                            images and store for ODCL pipeline entry.
                                        </p>
                                    </ExperienceEntry>
                            </TimelineEntryComponent>

                            <TimelineEntryComponent logo={eYRC} videoUrl='abcd'>
                                <ExperienceEntry
                                    position='Full Stack Developer'
                                    where='e-Yantra Robotics Competition'
                                    when={{
                                        from:'October 2020',
                                        to: "April 2021"
                                    }}>
                                        <p>
                                            Developed an end-to-end automated warehouse system with Python, ROS, OpenCV, and 
                                            a real-time dashboard integrated with Google Apps Scripting and a live Dashboard 
                                            hosted on GitHub Pages.
                                        </p>
                                        <p>
                                            Detection of package properties such as destination and priority was done through 
                                            QR Processing with OpenCV, and UR5 arms were used for controlling placement 
                                            and sorting of packages, along with dynamic conveyor belt control.
                                        </p>
                                        <p>
                                            A Google Sheets WebApp Server was responsible for tracking order and package 
                                            delivery status, and was queried for presenting the information with a live 
                                            order map on a Dashboard Website.
                                        </p>
                                    </ExperienceEntry>
                            </TimelineEntryComponent>

                            <TimelineEntryComponent logo={MANAS}>
                                <ExperienceEntry
                                    position='AI Member'
                                    where='Project MANAS'
                                    when={{
                                        from:'Feb 2020',
                                        to: "Feb 2021"
                                    }}>
                                        <p>
                                            Learned about ML/AI from scratch.
                                        </p>
                                        <p>
                                            Implemented basic linear and logistic regression models using only NumPy.
                                            Also implemented Feed-Forward Deep Neural Networks and CNNs from scratch for 
                                            MNIST classification and Movie Genre Prediction from the Poster.
                                            Utilised TensorFlow to develop a Sentiment Analysis model using LSTMs to 
                                            summarise Movie Reviews into Positive, Neutral, or Negative.
                                        </p>
                                        <p>
                                            Implemented clustering on highly dense data with the help of Gaussian Mixture 
                                            Models.
                                        </p>
                                        <p>
                                            Deployed CenterNet for real-time Object Detection over live feed from ZedCamera 
                                            over ROS.
                                        </p>
                                    </ExperienceEntry>
                            </TimelineEntryComponent>
                        </TimelineContainer>
                    </Timeline>
                </TimelineLineContainer>
            </BodyContainerNCol>
    )
}

export const Head = () => {
    return (
        <title>Shivansh Bakshi | Experience</title>
    )
}

export default ExperiencePage