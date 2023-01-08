import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ animationKey, children }) => {
    const duration = 0.2;

    const variants = {
        initial: {
          opacity: 0,
		  x: -15
        },
        enter: {
          opacity: 1,
		  x: 0,
          transition: {
            duration: duration,
            delay: duration,
          },
        },
        exit: {
          opacity: 0,
		  x: 15,
          transition: {
            duration: duration,
          },
        },
    }

    return(
        <AnimatePresence mode='wait'>
            <motion.div
				style={{
					position: 'fixed'
				}}
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