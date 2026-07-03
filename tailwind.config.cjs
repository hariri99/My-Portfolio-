/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    darkMode: "class", // or 'media'
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                backgroundDark: "#0F172A",
                cardDark: "#1E293B",
                textWhite: "#FFFFFF",
                textGray: "#94A3B8",
            },
        },
    },
    plugins: [],
};
