import React, { useState, useEffect } from "react";
import { HiSun, HiMoon, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import useDarkMode from "../hooks/useDarkMode";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [theme, toggleTheme] = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    // Handle transparent to blurred navbar background transition on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // IntersectionObserver for active section highlight
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -50% 0px", // Detects when section is roughly in the center-top of screen
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -70; // Height of sticky navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-250/50 dark:border-slate-800/10 py-3 shadow-lg"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo / Brand Name */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, "home")}
                            className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300"
                        >
                            Hussam.Dev
                        </a>
                    </div>

                    {/* Desktop Nav Items */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className={`text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                                    ? "text-blue-500 font-semibold"
                                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 ml-4 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors duration-200 shadow-sm border border-slate-200 dark:border-slate-700"
                            aria-label="Toggle theme mode"
                        >
                            {theme === "dark" ? (
                                <HiSun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <HiMoon className="w-5 h-5 text-indigo-600" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation Toggle & Theme Switcher */}
                    <div className="flex lg:hidden items-center space-x-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                            aria-label="Toggle theme mode"
                        >
                            {theme === "dark" ? (
                                <HiSun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <HiMoon className="w-5 h-5 text-indigo-600" />
                            )}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                            aria-label="Open primary site navigation menu"
                        >
                            {isOpen ? (
                                <HiOutlineX className="w-6 h-6" />
                            ) : (
                                <HiOutlineMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer/Dropdown Panel */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
                    } bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900`}
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleNavClick(e, item.id)}
                            className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${activeSection === item.id
                                ? "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 font-semibold"
                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:text-blue-500 dark:hover:text-blue-400"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

