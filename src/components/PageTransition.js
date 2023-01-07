import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ animationKey, children }) => {
    const duration = 0.35;

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
          transition: {
            duration: duration,
            when: "afterChildren",
          },
        },
    }

    return(
        <AnimatePresence>
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