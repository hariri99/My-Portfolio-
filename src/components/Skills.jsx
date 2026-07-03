import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/portfolioData";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPython,
    FaPhp,
    FaDatabase,
    FaReact,
    FaLaravel,
    FaBootstrap,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaBrain,
    FaRegLightbulb,
    FaCode,
} from "react-icons/fa";
import {
    SiCplusplus,
    SiExpress,
    SiMysql,
    SiPostman,
} from "react-icons/si";
import {
    HiOutlineCode,
    HiOutlineDatabase,
    HiOutlineChip,
    HiOutlineTerminal,
} from "react-icons/hi";

// Icon mapping dictionary
const iconMap = {
    HTML: <FaHtml5 className="text-orange-500 w-6 h-6" />,
    CSS: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
    JavaScript: <FaJs className="text-yellow-500 w-6 h-6" />, // higher contrast yellow
    PHP: <FaPhp className="text-indigo-500 dark:text-indigo-400" />,
    Python: <FaPython className="text-blue-500 dark:text-blue-400" />,
    SQL: <FaDatabase className="text-teal-500 dark:text-teal-400" />,
    "C++": <SiCplusplus className="text-blue-600 w-6 h-6" />,
    React: <FaReact className="text-cyan-500 dark:text-cyan-400" />,
    Laravel: <FaLaravel className="text-red-500 w-6 h-6" />,
    Bootstrap: <FaBootstrap className="text-purple-500 w-6 h-6" />,
    "Node.js": <FaNodeJs className="text-green-500 w-6 h-6" />,
    "Express.js": <SiExpress className="text-slate-600 dark:text-slate-350 w-6 h-6" />,
    MySQL: <SiMysql className="text-blue-500 dark:text-blue-400" />,
    "Machine Learning": <FaBrain className="text-pink-500 dark:text-pink-400" />,
    Git: <FaGitAlt className="text-orange-600 w-6 h-6" />,
    GitHub: <FaGithub className="text-slate-800 dark:text-slate-100 w-6 h-6" />,
    "VS Code": <FaCode className="text-blue-500 w-6 h-6" />,
    Postman: <SiPostman className="text-orange-500 w-6 h-6" />,
};

const defaultIcon = <FaRegLightbulb className="text-blue-500 w-6 h-6" />;

export default function Skills() {
    const [activeTab, setActiveTab] = useState("all");

    const categories = [
        { id: "all", label: "All Skills" },
        { id: "languages", label: "Languages", icon: <HiOutlineCode className="w-4 h-4 mr-1.5" /> },
        { id: "frameworks", label: "Frameworks/Libs", icon: <HiOutlineCode className="w-4 h-4 mr-1.5" /> },
        { id: "database", label: "Backend/DB", icon: <HiOutlineDatabase className="w-4 h-4 mr-1.5" /> },
        { id: "aiMl", label: "AI/ML", icon: <HiOutlineChip className="w-4 h-4 mr-1.5" /> },
        { id: "tools", label: "Tools", icon: <HiOutlineTerminal className="w-4 h-4 mr-1.5" /> },
    ];

    const getSkillsData = () => {
        switch (activeTab) {
            case "languages":
                return skills.languages.map((s) => ({ ...s, category: "languages" }));
            case "frameworks":
                return skills.frameworks.map((s) => ({ ...s, category: "frameworks" }));
            case "database":
                return [
                    ...skills.backend.map((s) => ({ ...s, category: "backend" })),
                    ...skills.database.map((s) => ({ ...s, category: "database" })),
                ];
            case "aiMl":
                return skills.aiMl.map((s) => ({ ...s, category: "aiMl" }));
            case "tools":
                return skills.tools.map((s) => ({ ...s, category: "tools" }));
            default:
                return [
                    ...skills.languages.map((s) => ({ ...s, category: "Languages" })),
                    ...skills.frameworks.map((s) => ({ ...s, category: "Frameworks" })),
                    ...skills.backend.map((s) => ({ ...s, category: "Backend" })),
                    ...skills.database.map((s) => ({ ...s, category: "Database" })),
                    ...skills.aiMl.map((s) => ({ ...s, category: "AI/ML" })),
                    ...skills.tools.map((s) => ({ ...s, category: "Tools" })),
                ];
        }
    };

    const filteredSkills = getSkillsData();

    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                    >
                        My Skills
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-blue-500 mx-auto mt-4 rounded"
                    />
                </div>

                {/* Tab Controls */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === cat.id
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500"
                                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-850 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                                }`}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Skill Card Grid */}
                <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                                className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700/80 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                            >
                                {/* Accent glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/0 to-blue-500/5 dark:to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform duration-300">
                                        {iconMap[skill.name] || defaultIcon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-850 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-base">
                                            {skill.name}
                                        </h3>
                                        {skill.level && (
                                            <span className="inline-block text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1">
                                                {skill.level}
                                            </span>
                                        )}
                                        {skill.category && activeTab === "all" && (
                                            <span className="inline-block text-[9px] text-blue-605 dark:text-blue-500 font-mono tracking-wider uppercase bg-blue-900/5 dark:bg-blue-900/10 border border-blue-900/10 dark:border-blue-900/20 px-2 py-0.5 rounded-md mt-1.5 ml-1">
                                                {skill.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
