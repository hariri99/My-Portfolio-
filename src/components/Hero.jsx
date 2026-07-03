import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { HiArrowRight, HiDownload, HiMail } from "react-icons/hi";

export default function Hero() {
    const [typedText, setTypedText] = useState("");
    const titles = ["Full Stack Developer", "AI Practitioner", "Software Engineer"];
    const [titleIdx, setTitleIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Auto-typing simulator
    useEffect(() => {
        const currentTitle = titles[titleIdx];
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setTypedText(currentTitle.substring(0, charIdx - 1));
                setCharIdx((prev) => prev - 1);
            }, 50);
        } else {
            timer = setTimeout(() => {
                setTypedText(currentTitle.substring(0, charIdx + 1));
                setCharIdx((prev) => prev + 1);
            }, 100);
        }

        if (!isDeleting && charIdx === currentTitle.length) {
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIdx === 0) {
            setIsDeleting(false);
            setTitleIdx((prev) => (prev + 1) % titles.length);
        }

        return () => clearTimeout(timer);
    }, [charIdx, isDeleting, titleIdx]);

    const handleScrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -70; // sticky navbar offset
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 pt-16 transition-colors duration-300"
        >
            {/* Decorative ambient background blur gradients */}
            <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl saturate-150 animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl saturate-150 pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">

                {/* Left Column: Heading text content */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4 uppercase tracking-wider">
                            Available for Internships & Junior Roles
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-2"
                    >
                        <h3 className="text-lg font-mono text-slate-500 dark:text-slate-400">Hi, I'm</h3>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                                {personalInfo.name}
                            </span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-500 h-10 flex items-center">
                            <span>{typedText}</span>
                            <span className="w-1 h-7 ml-1 bg-blue-600 dark:bg-blue-500 animate-ping" />
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <button
                            onClick={() => handleScrollTo("projects")}
                            className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 group hover:-translate-y-0.5"
                        >
                            View Projects
                            <HiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        <a
                            href={personalInfo.resumeUrl}
                            download
                            className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-350 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                        >
                            Download Resume
                            <HiDownload className="ml-2 w-4 h-4 text-slate-500 dark:text-slate-400" />
                        </a>

                        <button
                            onClick={() => handleScrollTo("contact")}
                            className="inline-flex items-center px-6 py-3 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Contact Me
                            <HiMail className="ml-2 w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Premium Code Terminal Card (No photo) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full max-w-md aspect-[4/3] group"
                    >
                        {/* Ambient glows behind the terminal */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl opacity-10 dark:opacity-20 filter blur-xl transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-3xl opacity-20 dark:opacity-30 filter blur-sm group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Inner Code Editor Terminal Card */}
                        <div className="relative w-full h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col p-6 shadow-2xl transition-colors duration-300">
                            {/* Window Controls */}
                            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800/80 mb-6 font-mono text-[11px] text-slate-400 dark:text-slate-500">
                                <div className="flex space-x-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/70" />
                                </div>
                                <span className="font-semibold tracking-wider">hussam_developer.js</span>
                                <div className="w-8" />
                            </div>

                            {/* Technical JSON / Code Block Visualizer */}
                            <div className="flex-1 font-mono text-xs leading-relaxed space-y-2 overflow-y-auto select-none pr-1">
                                <div>
                                    <span className="text-indigo-600 dark:text-pink-500">const</span>{" "}
                                    <span className="text-slate-800 dark:text-blue-400 font-semibold">developer</span>{" "}
                                    <span className="text-slate-600 dark:text-white">=</span>{" "}
                                    <span className="text-slate-850 dark:text-white">&#123;</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-900 dark:text-slate-300">name</span>
                                    <span className="text-slate-500">:</span>{" "}
                                    <span className="text-emerald-600 dark:text-green-300">"{personalInfo.name}"</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-900 dark:text-slate-300">role</span>
                                    <span className="text-slate-500">:</span>{" "}
                                    <span className="text-emerald-600 dark:text-green-300">"Full Stack Developer"</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-900 dark:text-slate-300">focus</span>
                                    <span className="text-slate-500">:</span>{" "}
                                    <span className="text-emerald-600 dark:text-green-300">"Web & AI/ML Systems"</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-900 dark:text-slate-300">frameworks</span>
                                    <span className="text-slate-500">:</span>{" "}
                                    <span className="text-slate-700 dark:text-slate-100">[</span>
                                    <span className="text-orange-650 dark:text-orange-400">"React"</span>
                                    <span className="text-slate-500">,</span>{" "}
                                    <span className="text-sky-600 dark:text-sky-400">"Laravel"</span>
                                    <span className="text-slate-700 dark:text-slate-100">]</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-900 dark:text-slate-300">backend</span>
                                    <span className="text-slate-500">:</span>{" "}
                                    <span className="text-slate-700 dark:text-slate-100">[</span>
                                    <span className="text-green-600 dark:text-emerald-400">"Node.js"</span>
                                    <span className="text-slate-750 dark:text-cyan-400">, "Express"</span>
                                    <span className="text-slate-700 dark:text-slate-100">]</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-900 dark:text-slate-300">database</span>
                                    <span className="text-slate-500">:</span>{" "}
                                    <span className="text-teal-650 dark:text-teal-400">"MySQL"</span>
                                </div>
                                <div>
                                    <span className="text-slate-850 dark:text-white">&#125;;</span>
                                </div>
                            </div>

                            {/* Tech tag overlays inside terminal window */}
                            <div className="w-full flex justify-start gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-4">
                                <span className="px-2 py-0.5 text-[8.5px] uppercase font-mono tracking-widest bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-slate-500 dark:text-slate-400 rounded-md">
                                    React
                                </span>
                                <span className="px-2 py-0.5 text-[8.5px] uppercase font-mono tracking-widest bg-slate-105 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-slate-500 dark:text-slate-400 rounded-md">
                                    Node.js
                                </span>
                                <span className="px-2 py-0.5 text-[8.5px] uppercase font-mono tracking-widest bg-blue-50 dark:bg-blue-950/30 border border-blue-105 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md">
                                    PyTorch
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
