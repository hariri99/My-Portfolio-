import React from "react";
import { motion } from "framer-motion";
import { certifications, workshops } from "../data/portfolioData";
import { HiBadgeCheck, HiCalendar, HiAcademicCap } from "react-icons/hi";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            {/* Decorative Glow */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-20">

                {/* 1. Certifications Part */}
                <div className="space-y-12">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                        >
                            Certifications
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-1 bg-blue-500 mx-auto mt-4 rounded"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-blue-50 dark:bg-slate-950 border border-blue-100 dark:border-slate-800 rounded-xl text-blue-500 dark:text-blue-450 group-hover:scale-110 transition-transform duration-300">
                                        <HiBadgeCheck className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1.5 flex-1">
                                        <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-base">
                                            {cert.title}
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">
                                            {cert.issuer}
                                        </p>
                                        <div className="flex items-center text-[10px] text-slate-400 font-medium">
                                            <HiCalendar className="mr-1 w-3.5 h-3.5" />
                                            {cert.date}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Workshops Part */}
                <div className="space-y-12 pt-8">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                        >
                            Workshops & Extra Activities
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-1 bg-blue-500 mx-auto mt-4 rounded"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {workshops.map((workshop) => (
                            <motion.div
                                key={workshop.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="max-w-3xl mx-auto p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-blue-500/10 transition-colors duration-500" />

                                <div className="flex items-start space-x-4 relative z-10">
                                    <div className="p-3.5 bg-blue-50 dark:bg-slate-950 border border-blue-100 dark:border-slate-800 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-300">
                                        <HiAcademicCap className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {workshop.title}
                                            </h3>
                                            <span className="inline-flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400">
                                                <HiCalendar className="mr-1.5 w-3.5 h-3.5 text-blue-500" />
                                                {workshop.date}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {workshop.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
