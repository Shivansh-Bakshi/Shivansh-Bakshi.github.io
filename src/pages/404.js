import * as React from 'react';
import { BodyContainerNCol } from '../styles/global';
import { Error, Message } from '../styles';

const NotFoundPage = () => {
    return (
        <BodyContainerNCol n={1}>
            <Error>This Page Does Not Exist</Error>
            <Message>Try navigating to another page.</Message>
        </BodyContainerNCol>
    )
}

export const Head = () => {
    return (
        <title>404</title>
    )
}

export default NotFoundPage