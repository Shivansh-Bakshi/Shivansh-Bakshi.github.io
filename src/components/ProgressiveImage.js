import React, { useEffect, useState } from 'react';

const ProgressiveImage = ({ placeholderSrc, src, ...props}) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src)
        };
    }, [src])

    const loadClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
        return(
        <img
            {...{src: imgSrc, ...props}}
            alt={props.alt || ''}
            style={{
                filter: loadClass === 'loading' ? 'blur(10px)' : 'blur(0px)',
            }}
        />
    )
}

export default ProgressiveImage;