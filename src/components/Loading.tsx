import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const handleLoadingTime = () => {
            setTimeout(() => {
                setLoading(false);
            }, 2700);
        };

        handleLoadingTime();
    }, []);
    return (
        <AnimatePresence>
            {loading && (
                <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-center items-center h-screen  !overflow-hidden"
                >
                    <motion.div
                        className="self-center flex gap-6 items-end"
                        initial={{ y: -1000 }}
                        animate={{ y: 0 }}
                        exit={{ scale: 20 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.img
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: 180 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            src="/fav.svg"
                            alt="Logo"
                        />
                        <motion.img
                            initial={{ x: -400, opacity: 0 }}
                            animate={{ x: 0, opacity: 100 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            src="/logoText.svg"
                            alt="Logo"
                        />
                    </motion.div>
                </motion.main>
            )}
        </AnimatePresence>
    );
}
