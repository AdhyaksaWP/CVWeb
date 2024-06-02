import { motion } from "framer-motion";

function CVBackground() {
  return (
    <div className="h-screen w-screen z-0 flex justify-center items-center bg-alabaster">
      <motion.div
                className="slide-out fixed w-[100vw] h-[100vh] top-0 left-0 bg-gradient-to-r from-[#dfdede] from-20% to-alabaster to-70% origin-left z-20"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0  }}
                transition={{ duration: 50, ease: [0.22, 1, 0.36, 1] , repeat: Infinity}}
            >
        </motion.div>
        <div className="w-32 h-32 absolute z-50 bg-indigo-dye right-[-2vw] bottom-[-5vh]"></div>
        <div className="w-32 h-32 absolute z-50 bg-indigo-dye left-[-2vw] bottom-[-5vh]"></div>
    </div>
  );
}

export default CVBackground;