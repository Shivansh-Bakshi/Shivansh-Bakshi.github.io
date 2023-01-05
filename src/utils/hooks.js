import { useState, useEffect, useCallback } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export const useIsOutsideClick = (ref, callbackFn) => {
    useEffect(() => {
        function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callbackFn();
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, [ref, callbackFn]);
}

export const useEffectAfterFirstRender = (updateRef, callbackFn, dependencyList) => {
    useEffect(() => {
        if (updateRef.current) {
            updateRef.current = false;
            return;
        }
        callbackFn();
    }, [updateRef, callbackFn, dependencyList])
}

export const useMediaQuery = (query) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false)  
        }
    }, [])

    useEffect(() => {
        const media = window.matchMedia('(' + query + ')')
        media.addEventListener('change', updateTarget)

        if (media.matches) {
            setTargetReached(true)
        }
        return () => media.removeEventListener('change', updateTarget)
    }, [query, updateTarget])

    return targetReached
}
