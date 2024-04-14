import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type RevealProps = {
    children: React.ReactNode;
    width?: string;
};
export default function Reveal({
    children,
    width = "fit-content",
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    // const slideControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            // slideControls.start("visible");
            controls.start("visible");
        }
    }, [isInView, controls]);
    return (
        <div
            ref={ref}
            style={{ position: "relative", width, overflow: "hidden" }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.25, duration: 0.5 }}
            >
                {children}
            </motion.div>
            {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ ease: "easeIn", duration: 0.5 }}
        className="absolute top-1 bottom-1 left-0 right-0 bg-white z-20"
      /> */}
        </div>
    );
}
