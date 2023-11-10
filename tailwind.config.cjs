/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundColor: {
				'normal-white': '#fffeff',
				'dark-blue': '#00324d',
				'standard-blue': '#0093c3',
				'light-blue': '#8cc5e8'
			}
		}
	},
	daisyui: {
		themes: ["light"]
	},

	plugins: [require("daisyui")]
};

module.exports = config;
