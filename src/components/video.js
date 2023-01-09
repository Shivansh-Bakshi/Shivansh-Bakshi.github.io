import React from 'react';
import { VideoContainer } from '../styles/video';

const VideoComponent = ({ videoUrl, visible, set }) => {
    const variants = {
        initial: {
            opacity: 0,
            zIndex: -50
        },
        animate: {
            opacity: visible ? 0.7 : 0,
            zIndex: visible ? 150 : -50,
            transition: {
                opacity: {
                    duration: 0.1,
                    delay: visible ? 0.01 : 0
                },
                zIndex: {
                    delay: visible ? 0 : 0.2
                }
            }
        },
    }

    const handleOnClick = () => {
        set({
            videoUrl: '',
            visible: false
        })
    }

    return(
        <VideoContainer initial="initial" animate="animate" variants={variants} onClick={handleOnClick}>

        </VideoContainer>
    )
}

export default VideoComponent