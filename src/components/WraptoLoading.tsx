import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function WraptoLoading() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const animateLoader = async () => {
            animate(
                [
                    [".innerO", { pathLength: 1.1, pathOffset: 0 }],
                    [".innerO", { pathLength: 0, pathOffset: 0 }],
                ],
                { duration: 7, repeat: Infinity, repeatDelay: 0.3 },
            );
            animate(
                [
                    [".outerO", { pathLength: 0, pathOffset: 0 }],
                    [".outerO", { pathLength: 1.1, pathOffset: 0 }],
                ],
                { duration: 7, repeat: Infinity, repeatDelay: 0.3 },
            );
        };
        animateLoader();
    }, []);

    return (
        // <div className="bg-primary-base rounded-full size-24 ">
        <svg
            width="80"
            height="59"
            viewBox="0 0 80 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="[&_*]:stroke-[1.5px]  size-24"
            ref={scope}
        >
            <motion.path
                className="innerO stroke-primary"
                initial={{ pathLength: 1.1, pathOffset: 1 }}
                d="M0.583013 38.0418H79.9999M0.583013 38.0418L70.583 21.3751M0.583013 38.0418L63.9163 11.3751M0.583013 38.0418L50.583 1.37512M0.583013 38.0418L33.9163 1.37512M0.583013 38.0418L17.2497 4.70846M0.583013 38.0418L7.24968 8.04179M0.583013 38.0418V11.3751M0.583008 14.7085C0.591705 27.8848 10.5056 38.6127 23.9163 38.0418"
                fill="transparent"
            />
            <motion.path
                className="outerO stroke-gray-200"
                initial={{ pathLength: 1.1, pathOffset: 0 }}
                d="M0.583013 38.0418H79.9999M0.583013 38.0418L70.583 21.3751M0.583013 38.0418L63.9163 11.3751M0.583013 38.0418L50.583 1.37512M0.583013 38.0418L33.9163 1.37512M0.583013 38.0418L17.2497 4.70846M0.583013 38.0418L7.24968 8.04179M0.583013 38.0418V11.3751M0.583008 14.7085C0.591705 27.8848 10.5056 38.6127 23.9163 38.0418"
                fill="transparent"
            />
        </svg>
        // </div>
    );
}
