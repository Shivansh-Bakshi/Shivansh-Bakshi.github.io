import React, { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children, location }) => {
    const duration = 0.35;

    useEffect(() => {
        console.log(location);
    }, [])

    const variants = {
        initial: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
          transition: {
            duration: duration,
            delay: duration,
            when: "beforeChildren",
          },
        },
        exit: {
          opacity: 0,
          transition: { duration: duration },
        },
    }

    return(
        <AnimatePresence>
            <motion.div
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
                >
                    {children}
                </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition;