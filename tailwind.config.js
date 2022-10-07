/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#05051F',
				secondary: '#21205C',
				action: '#F0F0F4',
				default: '#7D7D7D',
			},
		},
		container: {
			padding: {
				DEFAULT: '6rem',
			},
		},
	},
	plugins: [],
}

