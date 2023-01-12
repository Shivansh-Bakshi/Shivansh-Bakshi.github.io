import * as React from 'react';
import { transitionEffects } from '../styles/constants';
import { InitialTransitionContainer, InitialTransitionCore } from '../styles';

const blackBox = {
    initial: {
        top: 0,
        height: "100vh",
    },
    animate: {
      height: '0',
      transition: transitionEffects
    },
};

const InitialTransition = () => {
    return(
        <InitialTransitionContainer>
            <InitialTransitionCore 
                initial="initial"
                animate="animate"
                variants={blackBox}
            />
        </InitialTransitionContainer>
    )
}

export default InitialTransition;