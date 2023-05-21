/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#170730",
				primary: "#B7A2FA", // flat blue
				secondary: "#6760AF", // deep blue
				tertiary: "#1BABF1", // purple
				accent: "#1473C1", // more purple
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
