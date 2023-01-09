import React from 'react';
import { VideoContainer, VideoPlayer, VideoPlayerContainer } from '../styles/video';

const getIframeProps = (videoid) => {
    return({
        src: `https://www.youtube.com/embed/${videoid}?enablejsapi=1&origin=https://www.shivanshbakshi.dev&autoplay=1&rel=0`,
        width: 560,
        height: 315,
    })
}

const VideoComponent = ({ videoid, visible, set }) => {
    const variants = {
        overlay: {
            initial: {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                zIndex: -50
            },
            animate: {
                backgroundColor: visible ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)',
                zIndex: visible ? 150 : -50,
                transition: {
                    when: "afterChildren",
                    backgroundColor: {
                        duration: 0.1,
                        delay: visible ? 0.01 : 0
                    },
                    zIndex: {
                        delay: visible ? 0 : 0.2
                    }
                }
            },
        },
        player: {
            initial: {
                opacity: 0,
            },
            animate: {
                opacity: visible ? 1 : 0,
                transition: {
                    duration: 0.1
                }
            }
        }
    }

    const handleOnClick = () => {
        set({
            videoid: '',
            visible: false
        })
    }

    return(
        <VideoContainer initial="initial" animate="animate" variants={variants.overlay} onClick={handleOnClick}>
            <VideoPlayerContainer 
                initial="initial"
                animate="animate"
                variants={variants.player}
            >
                <VideoPlayer {...getIframeProps(videoid)} allowFullScreen></VideoPlayer>
            </VideoPlayerContainer>
        </VideoContainer>
    )
}

export default VideoComponent