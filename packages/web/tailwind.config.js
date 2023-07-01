/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.tsx', './modules/**/*.tsx', '../ui/**/*.tsx'],
	theme: {
		colors: {
			'dark-gray-9': '#030303',
			'dark-gray-8': '#060606',
			'dark-gray-7': '#090909',
			'dark-gray-6': '#0c0c0c',
			'dark-gray-5': '#0f0f0f',
			'dark-gray-4': '#111111',
			'dark-gray-3': '#141414',
			'dark-gray-2': '#171717',
			'dark-gray-1': '#1a1a1a',
			'dark-gray-0': '#1D1D1D',
			'light-gray-9': '#171717',
			'light-gray-8': '#2d2d2d',
			'light-gray-7': '#444444',
			'light-gray-6': '#5a5a5a',
			'light-gray-5': '#717171',
			'light-gray-4': '#888888',
			'light-gray-3': '#9e9e9e',
			'light-gray-2': '#b5b5b5',
			'light-gray-1': '#cbcbcb',
			'light-gray-0': '#E2E2E2',
			'blue-9': '#131b68',
			'blue-8': '#161f79',
			'blue-7': '#19248a',
			'blue-6': '#1c299c',
			'blue-5': '#1F2DAD',
			'blue-4': '#3542b5',
			'blue-3': '#4c57bd',
			'blue-2': '#626cc6',
			'blue-1': '#7981ce',
		},
		container: {
			padding: {
				DEFAULT: '6rem',
			},
		},
	},
	plugins: [],
}

