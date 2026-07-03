import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/portfolioData";
import { HiAcademicCap, HiCalendar } from "react-icons/hi";

export default function Education() {
    return (
        <section id="education" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            {/* Decorative ambient background light */}
            <div className="absolute top-1/2 left-[10%] w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

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
                        Education Path
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-blue-500 mx-auto mt-4 rounded"
                    />
                </div>

                {/* Timeline list */}
                <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative pl-8 md:pl-10 group"
                        >
                            {/* Timeline Bullet Anchor Icon */}
                            <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-500 text-blue-500 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-305">
                                <HiAcademicCap className="w-4 h-4" />
                            </div>

                            {/* Education Card container */}
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300 shadow-sm hover:shadow-md space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {edu.institution}
                                    </h3>
                                    <span className="inline-flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full">
                                        <HiCalendar className="mr-1.5 w-3.5 h-3.5 text-blue-500" />
                                        {edu.period}
                                    </span>
                                </div>

                                <h4 className="text-md font-medium text-slate-700 dark:text-slate-300">
                                    {edu.degree}
                                </h4>

                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1 select-none">
                                    {edu.details}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
