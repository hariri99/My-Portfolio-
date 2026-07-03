import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";
import { HiBriefcase, HiCalendar } from "react-icons/hi";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                    >
                        Professional Experience
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-blue-500 mx-auto mt-4 rounded"
                    />
                </div>

                {/* Timeline Path */}
                <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative pl-8 md:pl-10 group"
                        >
                            {/* Bullets icons */}
                            <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-500 text-blue-500 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <HiBriefcase className="w-4 h-4" />
                            </div>

                            {/* Data Card */}
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/85 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300 shadow-sm hover:shadow-md space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {exp.company}
                                    </h3>
                                    <span className="inline-flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full">
                                        <HiCalendar className="mr-1.5 w-3.5 h-3.5 text-blue-500" />
                                        {exp.period}
                                    </span>
                                </div>

                                <h4 className="text-md font-medium text-blue-600 dark:text-blue-400">
                                    {exp.role}
                                </h4>

                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
