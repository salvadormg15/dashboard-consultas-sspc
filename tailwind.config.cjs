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
		themes: ["light",]
		/* Ideal, also add a dark theme for automatic switch based on system theme
		themes: [
      {
        'light': {
          'primary': '#570df8',
          'primary-focus': '#4506cb',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ]
		 */
	},

	plugins: [require("daisyui")]
};

module.exports = config;
