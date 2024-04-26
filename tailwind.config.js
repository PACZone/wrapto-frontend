import tailwindcssAnimated from 'tailwindcss-animated';
import tailwindcssAnimate from 'tailwindcss-animate';


/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    // prefix: "",
    container: {
        center: true,
        padding: "2rem",
        screens: {
            "2xl": "1400px",
        },
    },
    theme: {
        extend: {
            spacing: {
                sp1: "var(--sp1)",
                sp2: "var(--sp2)",
                sp3: "var(--sp3)",
                sp4: "var(--sp4)",
                sp5: "var(--sp5)",
                sp6: "var(--sp6)",
                sp7: "var(--sp7)",
                sp8: "var(--sp8)",
                sp9: "var(--sp9)",
                sp10: "var(--sp10)",
                sp11: "var(--sp11)",
                sp12: "var(--sp12)",
                sp13: "var(--sp13)",
                sp14: "var(--sp14)",
                sp15: "var(--sp15)",
                sp16: "var(--sp16)",
                sp17: "var(--sp17)",
                sp18: "var(--sp18)",
            },
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                background: "var(--background)",
                gray: {
                    normal: "var(--gray-normal)",
                    50: "var(--gray-50)",
                    100: "var(--gray-100)",
                    200: "var(--gray-200)",
                    300: "var(--gray-300)",
                    400: "var(--gray-400)",
                    500: "var(--gray-500)",
                    600: "var(--gray-600)",
                    700: "var(--gray-700)",
                    800: "var(--gray-800)",
                    900: "var(--gray-900)",
                    950: "var(--gray-950)",
                },
                error: 'var(--error)',
                danger: 'var(--danger)'
            },
        },
        fontFamily: {
            Neue: "Aeonik Fono TRIAL",
        },

        screens: {
            sm: "0px",
            md: "768px",
            lg: "1024px",
            xl: "1366px",
            "2xl": "1536px",
            "3xl": "1920px",
        },
    },
    plugins: [
        tailwindcssAnimated,
        tailwindcssAnimate,
        function ({
            addComponents
        }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        // minWidth: '0',
                        padding: "0 1rem",
                    },
                    "@screen md": {
                        // minWidth: '768px',
                        padding: "0 1rem",
                    },
                    "@screen lg": {
                        // minWidth: '1024px',
                        padding: "0 1.5rem",
                    },
                    "@screen xl": {
                        // minWidth: '1366px',
                        padding: "0 2rem",
                    },
                    "@screen 2xl": {
                        // minWidth: '1536px',
                        padding: "0 64px",
                    },
                    "@screen 3xl": {
                        // minWidth: '1920px',
                        padding: "0 64px",
                    },
                },
            });
        },
    ],
};