/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
	theme: {
		extend: {
			
		},
		fontSize: {
			'xs': '0.56rem',
			'sm': '0.75rem',
			'base': '1rem',
			'lg': '1.33rem',
			'xl': '1.78rem',
			'2xl': '2.37rem',
			'3xl': '3.16rem',
			'4xl': '4.21rem',
			'5xl': '5.61rem',
			'6xl': '7.48rem',
			'7xl': '9.97rem',
		},
		colors: {
			// Dark Mode
			'drk-con': '#EDEDE9',
			'drk-con-sec': '#F5EBE0',
			'drk-base': '#272d2d;',
			// Light Mode
			'lgt-con': '#272D2D',
			'lgt-con-sec': '#5E503F',
			'lgt-base': '#EDEDE9',
    },
		fontFamily: {
			sans: ['Lexend', 'sans-serif']
		}
	},
	plugins: []
};
