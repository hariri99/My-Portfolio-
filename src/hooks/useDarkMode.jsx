import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const persistedTheme = localStorage.getItem("theme");
            if (persistedTheme) return persistedTheme;

            const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return systemPreference ? "dark" : "light";
        }
        return "dark"; // fallback default
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            root.style.colorScheme = "dark";
        } else {
            root.classList.remove("dark");
            root.style.colorScheme = "light";
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return [theme, toggleTheme];
}
