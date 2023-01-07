import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ animationKey, children }) => {
    const duration = 0.2;

    const variants = {
        initial: {
          opacity: 0,
          transform: 'translateX(-10px)'
        },
        enter: {
          opacity: 1,
          transform: 'translateX(10px)',
          transition: {
            duration: duration,
            delay: duration,
            when: "beforeChildren",
          },
        },
        exit: {
          opacity: 0,
          transition: {
            duration: duration,
            when: "afterChildren",
          },
        },
    }

    return(
        <AnimatePresence mode='wait'>
            <motion.div
                key={animationKey}
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