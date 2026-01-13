/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'skillvant-black': '#080808',
                'skillvant-purple': '#8B5CF6',
                'primary': '#8B5CF6', // New standard as per request
                'secondary': '#D8B4FE', // New accent
                'skillvant-lime': '#E0FF00', // Deprecated
                'skillvant-dark-grey': '#121212',
            },
            fontFamily: {
                'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
                'inter': ['"Inter"', 'sans-serif'],
                'signature': ['"Great Vibes"', 'cursive'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
}
