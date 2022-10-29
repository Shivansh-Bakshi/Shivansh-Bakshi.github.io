import { useState, useEffect, useRef } from "react";

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

export const useVisibility = (offset = 0) => {
    const [isVisible, setIsVisible] = useState(true);
    const currentElement = useRef(null);
  
    const onScroll = () => {
      if (!currentElement.current) {
        setIsVisible(false);
        return;
      }
      const bottom = currentElement.current.getBoundingClientRect().bottom;
      setIsVisible(bottom + offset >= 0 && bottom - offset <= window.innerHeight);
    }
  
    useEffect(() => {
      document.addEventListener('scroll', onScroll, true);
      return () => document.removeEventListener('scroll', onScroll, true);
    });
  
    return [isVisible, currentElement];
  }