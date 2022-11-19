/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            white: "#ffffff",
            black: "#000000",
            primary: {
                50: "#f1f8f1",
                100: "#dfeedd",
                200: "#c0dcbe",
                300: "#92c393",
                400: "#7ab17c",
                500: "#428747",
                600: "#306b36",
                700: "#27552c",
                800: "#204524",
                900: "#1b391f",
            },
            secondary: {
                50: "#f4f9f7",
                100: "#dbece5",
                200: "#b8d7cc",
                300: "#7bb2a0",
                400: "#649d8c",
                500: "#4a8272",
                600: "#39685b",
                700: "#31544b",
                800: "#2a453e",
                900: "#263b35",
            },
            gray: {
                50:'#f9fafb',
                100:'#f1f5f9',
                200:'#e2e8f0',
                300:'#d1d5db',
                400:'#9ca3af',
                500:'#6b7280',
                600:'#4b5563',
                700:'#374151',
                800:'#1f2937',
                900:'#111827'
            }
        },
        extend: {
            // Custom animation classes
            animation: {
                fadeIn: "fadeIn 0.5s ease-in-out",
                fadeInLeft: "fadeInLeft 0.3s ease-in-out",
                fadeInRight: "fadeInRight 0.3s ease-in-out",
                fadeInUp: "fadeInUp 0.3s ease-in-out",
                textOpenClose: "textOpenClose 15s ease-in-out infinite",
            },

            // Actual animations
            keyframes: (theme) => ({
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                fadeInLeft: {
                    "0%": { opacity: 0, transform: "translateX(-10%)" },
                    "100%": { opacity: 1, transform: "translateX(0%)" },
                },
                fadeInRight: {
                    "0%": { opacity: 0, transform: "translateX(20%)" },
                    "100%": { opacity: 1, transform: "translateX(0%)" },
                },
                fadeInUp: {
                    "0%": { opacity: 0, transform: "translateY(20%)" },
                    "100%": { opacity: 1, transform: "translateX(0%)" },
                },
                textOpenClose: {
                    "0%": { top: "0rem", width: 0 },
                    "4%": { top: "0rem", width: 0 },
                    "14%": { top: "0rem", width: "180px" },
                    "30%": { top: "0rem", width: "180px" },
                    "33%": { top: "0rem", width: 0 },
                    "38%": { top: "-2.25rem", width: 0 },
                    "48%": { top: "-2.25rem", width: "180px" },
                    "62%": { top: "-2.25rem", width: "180px" },
                    "66%": { top: "-2.25rem", width: 0 },
                    "71%": { top: "-4.5rem", width: 0 },
                    "80%": { top: "-4.5rem", width: "180px" },
                    "95%": { top: "-4.5rem", width: "180px" },
                    "98%": { top: "-4.5rem", width: 0 },
                    "100%": { top: "0rem", width: 0 },
                },
            }),
        },
    },
    plugins: [],
};
