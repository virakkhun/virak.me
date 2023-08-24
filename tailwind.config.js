/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './ui/**/*.svelte'],
	theme: {
		extend: {
			dropShadow: {
				'3xl': '0 20px 35px rgba(94, 208, 82, 0.25)',
				'4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
				emerald: '0 10px 20px #42bd67'
			}
		}
	},
	plugins: []
};
