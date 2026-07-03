import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolioData";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaCheck, FaFolder } from "react-icons/fa";

export default function Projects() {
    const [selectedTech, setSelectedTech] = useState("All");
    const [expandedProject, setExpandedProject] = useState(null);

    // Dynamic technology list extractor
    const techCategories = ["All", ...new Set(projects.flatMap((p) => p.tech))];

    // Filter projects based on choice category
    const filteredProjects = selectedTech === "All"
        ? projects
        : projects.filter((p) => p.tech.includes(selectedTech));

    // Featured (spotlight) projects
    const featuredProjects = filteredProjects.filter((p) => p.featured);
    // Standard cards projects
    const standardProjects = filteredProjects.filter((p) => !p.featured);

    const toggleExpand = (id) => {
        setExpandedProject((prev) => (prev === id ? null : id));
    };

    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Title Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                    >
                        Portfolio Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm"
                    >
                        A curated collection of digital experiences, enterprise applications, and tools I have engineered.
                    </motion.p>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-blue-505 mx-auto mt-4 rounded"
                    />
                </div>

                {/* Tech filtering pills bar selector */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {techCategories.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => {
                                setSelectedTech(tech);
                                setExpandedProject(null);
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-305 ${selectedTech === tech
                                ? "bg-blue-600 border-blue-550 text-white shadow-md shadow-blue-500/25"
                                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700"
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                {/* Projects Layout */}
                <div className="space-y-12">
                    <AnimatePresence mode="popLayout">

                        {/* Featured Projects */}
                        {featuredProjects.map((project) => {
                            const isExpanded = expandedProject === project.id;
                            return (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative group bg-white dark:bg-slate-900 border border-blue-500/20 dark:border-blue-500/30 rounded-3xl overflow-hidden shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/50 transition-colors duration-305"
                                >
                                    {/* Spotlight Badge */}
                                    <div className="absolute top-4 right-4 z-20 px-3.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                                        Featured Project
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8">
                                        {/* Left: Image */}
                                        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-video lg:aspect-auto lg:h-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner group-hover:border-slate-350 dark:group-hover:border-slate-700 transition-colors duration-300 min-h-[240px]">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-slate-950/5 dark:bg-slate-950/10 pointer-events-none" />
                                        </div>

                                        {/* Right: Info */}
                                        <div className="lg:col-span-6 flex flex-col justify-between py-1">
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white leading-tight">
                                                        {project.title}
                                                    </h3>
                                                    {/* Tech Badges */}
                                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                                        {project.tech.map((t) => (
                                                            <span
                                                                key={t}
                                                                className="px-2.5 py-0.5 rounded-md text-[9px] font-mono tracking-wider font-semibold uppercase bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400"
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pt-1">
                                                    {project.description}
                                                </p>

                                                {/* Expanded Details List */}
                                                <div className="pt-2">
                                                    <button
                                                        onClick={() => toggleExpand(project.id)}
                                                        className="inline-flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors focus:outline-none"
                                                    >
                                                        {isExpanded ? (
                                                            <>
                                                                Hide Features &amp; Details
                                                                <FaChevronUp className="ml-1 w-3.5 h-3.5" />
                                                            </>
                                                        ) : (
                                                            <>
                                                                Show Features &amp; Details
                                                                <FaChevronDown className="ml-1 w-3.5 h-3.5" />
                                                            </>
                                                        )}
                                                    </button>

                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.25 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <ul className="mt-2 space-y-2 border-l-2 border-slate-200 dark:border-slate-800 pl-4 py-1.5">
                                                                    {project.features.map((feature, idx) => (
                                                                        <li key={idx} className="flex items-start text-xs text-slate-500 dark:text-slate-400">
                                                                            <FaCheck className="text-blue-500 w-3 h-3 mt-0.5 mr-2 flex-shrink-0" />
                                                                            <span>{feature}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>

                                            {/* CTA Buttons */}
                                            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                                                {project.github && project.github !== "#" && project.github !== "" && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm"
                                                    >
                                                        <FaGithub className="mr-2 w-4 h-4" />
                                                        GitHub Repo
                                                    </a>
                                                )}
                                                {project.demo && project.demo !== "#" && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 active:translate-y-0 hover:-translate-y-0.5 transition-all duration-305"
                                                    >
                                                        <FaExternalLinkAlt className="mr-2 w-3 h-3" />
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Standard Cards Projects Grid */}
                        {standardProjects.length > 0 && (
                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6"
                            >
                                <AnimatePresence mode="popLayout">
                                    {standardProjects.map((project) => {
                                        const isExpanded = expandedProject === project.id;
                                        return (
                                            <motion.div
                                                layout
                                                key={project.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.45 }}
                                                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-305 flex flex-col justify-between"
                                            >
                                                <div className="p-5 space-y-4">
                                                    {/* Top image container */}
                                                    <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner group-hover:border-slate-350 dark:group-hover:border-slate-700 transition-colors">
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                                                        />
                                                        <div className="absolute inset-0 bg-slate-950/5 dark:bg-slate-950/10" />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <h4 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                            {project.title}
                                                        </h4>

                                                        {/* Tech badges */}
                                                        <div className="flex flex-wrap gap-1">
                                                            {project.tech.map((t) => (
                                                                <span key={t} className="px-2 py-0.5 rounded text-[9px] font-mono tracking-wider font-semibold uppercase bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed pt-1">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    {/* Features list toggle */}
                                                    <div className="pt-2">
                                                        <button
                                                            onClick={() => toggleExpand(project.id)}
                                                            className="inline-flex items-center text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors focus:outline-none"
                                                        >
                                                            {isExpanded ? (
                                                                <>
                                                                    Hide Features &amp; Details
                                                                    <FaChevronUp className="ml-1 w-3 h-3" />
                                                                </>
                                                            ) : (
                                                                <>
                                                                    Show Features &amp; Details
                                                                    <FaChevronDown className="ml-1 w-3 h-3" />
                                                                </>
                                                            )}
                                                        </button>

                                                        <AnimatePresence>
                                                            {isExpanded && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    transition={{ duration: 0.25 }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <ul className="mt-2.5 space-y-1.5 border-l border-slate-200 dark:border-slate-800 pl-3 py-1">
                                                                        {project.features.map((feature, idx) => (
                                                                            <li key={idx} className="flex items-start text-[11px] text-slate-500 dark:text-slate-400">
                                                                                <FaCheck className="text-blue-500 w-2.5 h-2.5 mt-0.5 mr-1.5 flex-shrink-0" />
                                                                                <span>{feature}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>

                                                {/* Actions footer */}
                                                <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                                                    {project.github && project.github !== "#" && project.github !== "" && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 transition-colors flex-1 justify-center shadow-sm"
                                                        >
                                                            <FaGithub className="mr-1.5 w-3.5 h-3.5" />
                                                            Code
                                                        </a>
                                                    )}
                                                    {project.demo && project.demo !== "#" && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors flex-1 justify-center shadow-sm"
                                                        >
                                                            <FaExternalLinkAlt className="mr-1.5 w-3 h-3" />
                                                            Demo
                                                        </a>
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
