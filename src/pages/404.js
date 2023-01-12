import * as React from 'react';
import { BodyContainerNCol } from '../styles/global';
import { NotFoundError, NotFoundMessage } from '../styles';

const NotFoundPage = () => {
    return (
        <BodyContainerNCol n={1}>
            <NotFoundError>This Page Does Not Exist</NotFoundError>
            <NotFoundMessage>Try navigating to another page.</NotFoundMessage>
        </BodyContainerNCol>
    )
}

export const Head = () => {
    return (
        <title>404</title>
    )
}

export default NotFoundPage