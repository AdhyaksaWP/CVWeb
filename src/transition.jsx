import { motion } from "framer-motion";

const Transition = (OgComponent) => {
    const TransitionComponent = (props) => {
        return (
        <>
            <OgComponent {...props} />
            {/* <motion.div
                id="slide"
                className="slide-in fixed w-[100vw] h-[100vh] top-0 left-0 bg-prussian-blue origin-bottom z-20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            >
            </motion.div> */}
            <motion.div
                className="slide-out fixed w-[100vw] h-[100vh] top-0 left-0 bg-prussian-blue origin-bottom z-20"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            >
            </motion.div>
            <motion.div
                className="slide-out fixed w-[100vw] h-[100vh] top-0 left-0 bg-[#000000] origin-bottom z-20"
                initial={{ scaleY: 0.8 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            {/* <motion.div
                className="fixed w-[100vw] h-[100vh] top-0 left-0 bg-prussian-blue origin-top z-20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
            </motion.div> */}
        </>
        );
  };
  return TransitionComponent;
};

export default Transition;
