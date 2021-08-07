module.exports = {
    mode: "jit",
    purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "strong-cyan": "hsl(172, 67%, 45%)",
                "very-dark-cyan": "hsl(183, 100%, 15%)",
                "darker-grayish-cyan": "hsl(186, 14%, 43%)",
                "dark-grayish-cyan": "hsl(184, 14%, 56%)",
                "light-grayish-cyan": "hsl(185, 41%, 84%)",
                "lighter-grayish-cyan": "hsl(189, 41%, 97%)",
            },
            fontFamily: {
                "space-mono": ["Space Mono", "monospace"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
