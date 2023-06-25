/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.tsx', './modules/**/*.tsx', '../ui/**/*.tsx'],
	theme: {
		colors: {
			primary: '#1D1D1D',
			secondary: '#E2E2E2',
			action: '#1F2DAD',
		},
		container: {
			padding: {
				DEFAULT: '6rem',
			},
		},
	},
	plugins: [],
}

