import React from "react";
import { personalInfo } from "../data/portfolioData";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-250 dark:border-slate-900/60 py-10 px-4 sm:px-6 lg:px-8 text-center text-slate-600 dark:text-slate-400 text-xs transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Left Side: Copyright */}
                <p className="font-mono">
                    &copy; {currentYear} {personalInfo.name}. All rights reserved.
                </p>

                {/* Center: Made With */}
                <p className="flex items-center justify-center gap-1.5">
                    <span>Made with</span>
                    <FaHeart className="text-red-500 w-3 h-3 animate-pulse" />
                    <span>using React &amp; Tailwind CSS</span>
                </p>

                {/* Right Side: Version */}
                <p className="font-mono tracking-widest text-[9px] uppercase">
                    v1.0.0
                </p>

            </div>
        </footer>
    );
}
