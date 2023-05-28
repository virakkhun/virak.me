/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./shared/layouts/**/*.{js,ts,jsx,tsx}',
		'./modules/**/presentation/components/*.{tsx,jsx}',
		'./modules/**/presentation/*.{tsx,jsx}',
		'./core/**/*.tsx',
	],
	theme: {
		extend: {
			colors: {
				primary: '#1A1A1A',
				secondary: '#6B6A6A',
				action: '#000000',
				default: '#454545',
				lightPrimary: '#E7E4E4',
				lightSecondary: '#CAC5C5',
				lightAction: '#FFFFFF',
				lightDefault: '#AEA8A8',
			},
		},
		container: {
			padding: {
				DEFAULT: '6rem',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}

