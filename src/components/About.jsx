import React from "react";
import { motion } from "framer-motion";
import { aboutMe } from "../data/portfolioData";
import { HiCode, HiChip, HiLightningBolt, HiCheckCircle } from "react-icons/hi";

const cards = [
    {
        icon: <HiCode className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
        title: "Full-Stack Development",
        desc: "Crafting end-to-end web applications with modern frontend frameworks and robust APIs.",
    },
    {
        icon: <HiChip className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
        title: "AI & ML Solutions",
        desc: "Integrating intelligent machine learning models, predictive capabilities, and custom datasets.",
    },
    {
        icon: <HiLightningBolt className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
        title: "Efficient & Scalable",
        desc: "Designing databases and system architectures optimized for speed and growth.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-10 right-10 w-44 h-44 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-blue-500 mx-auto mt-4 rounded"
                    />
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Text Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                            Passionate developer committed to solving real-world challenges.
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            {aboutMe}
                        </p>
                        <div className="space-y-3">
                            {[
                                "Proactive learner, quick to adapt to new methodologies",
                                "Strong analytical skills with a focus on writing clean, scalable code",
                                "Excellent collaboration and communication skills"
                            ].map((bullet, index) => (
                                <div key={index} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                                    <HiCheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm font-medium">{bullet}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Card Grid */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/85 transition-all duration-300 hover:scale-[1.02] flex items-start space-x-4 shadow-sm hover:shadow-md"
                            >
                                <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                    {card.icon}
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
