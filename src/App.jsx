import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen finishLoading={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative min-h-screen bg-slate-950 text-slate-100"
                >
                    {/* Top Progress bar */}
                    <ScrollProgress />

                    {/* Sticky Navigation menu bar */}
                    <Navbar />

                    <main className="relative">
                        {/* Sections */}
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Education />
                        <Experience />
                        <Certifications />
                        <Contact />
                    </main>

                    {/* Footer content */}
                    <Footer />

                    {/* Scroll back to top shortcut */}
                    <ScrollToTop />
                </motion.div>
            )}
        </>
    );
}
