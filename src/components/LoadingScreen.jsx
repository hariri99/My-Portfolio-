import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ finishLoading }) {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(finishLoading, 400); // Small buffer before fading out
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [finishLoading]);

    // Keep percentage clamped between 0 and 100
    const clampedPercent = Math.min(percent, 100);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950 z-50 text-white select-none">
            <div className="relative flex flex-col items-center max-w-xs w-full px-4">
                {/* Animated Emblem/Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 relative"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <span className="text-2xl font-bold font-mono tracking-wider">H</span>
                    </div>
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl filter blur-md opacity-30 animate-pulse -z-10"></div>
                </motion.div>

                {/* Loading Progress Bar Container */}
                <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-1 overflow-hidden relative mb-4">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${clampedPercent}%` }}
                        transition={{ ease: "easeOut", duration: 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-full"
                    />
                </div>

                {/* Numerical Indicator */}
                <div className="flex justify-between w-full text-xs font-mono text-slate-400">
                    <span>INITIALIZING</span>
                    <span className="text-blue-400">{clampedPercent}%</span>
                </div>
            </div>
        </div>
    );
}
