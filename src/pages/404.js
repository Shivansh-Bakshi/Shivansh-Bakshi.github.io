import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Typewriter from "typewriter-effect";
import { Container404, Message, Message404, MessageFooter, MessageHeader } from "../sc/404";

const NotFoundPage = () => {
    return(
        <Container404>
            <StaticImage 
                src="../images/404.png" 
                alt="Fishing"
                style={{
                    left: -10,
                }}
            />
            <Message>
                <MessageHeader>OOPS! Looks like you've hit a</MessageHeader>
                <Message404>
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("404")
                            .changeDelay(50)
                            .pauseFor(100)
                            .start()
                        }}
                        options={{
                            cursor: "",
                        }}
                    />
                </Message404>
                <MessageFooter>Try going back, or click <Link to="/">here</Link> to go Home</MessageFooter>
            </Message>

        </Container404>
    )
}

export default NotFoundPage

export const Head = () => <title>404</title>
