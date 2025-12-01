import { motion } from 'framer-motion';

const glitchVariants = {
    initial: {
        opacity: 0,
        scale: 0.95,
        filter: 'blur(10px)',
    },
    animate: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px) hue-rotate(90deg)',
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        },
    },
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            variants={glitchVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
