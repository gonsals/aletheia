/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                "instrument-serif": "'Instrument Serif', serif",
            },
            backgroundImage: {
                "hero-qui-som": "url('/imagesProba/heroQuiSom.png')",
                "multitud-hero": "url('/imagesProba/multitudHero.png')",
                "nenas-hero": "url('/imagesProba/nenasHero.png')",
            },
        },
    },
    plugins: [],
};
