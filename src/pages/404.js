import * as React from 'react';
import { BodyContainer } from '../styles/global';
import { Error, Message } from '../styles/404';

const NotFoundPage = () => {
    return (
        <BodyContainer>
            <Error>This Page Does Not Exist</Error>
            <Message>Try navigating to another page.</Message>
        </BodyContainer>
    )
}

export const Head = () => {
    return (
        <title>404</title>
    )
}

export default NotFoundPage