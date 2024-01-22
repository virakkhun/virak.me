/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', '../ui/**/*.svelte'],
	theme: {
		extend: {
			dropShadow: {
				'3xl': '0 20px 35px rgba(94, 208, 82, 0.25)',
				'4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
				emerald: '0 10px 20px #42bd67'
			}
		},
		colors: {
			text: 'var(--text)',
			background: 'var(--background)',
			primary: 'var(--primary)',
			secondary: 'var(--secondary)',
			accent: 'var(--accent)'
		},
		fontSize: {
			sm: '0.750rem',
			base: '1rem',
			xl: '1.333rem',
			'2xl': '1.777rem',
			'3xl': '2.369rem',
			'4xl': '3.158rem',
			'5xl': '4.210rem'
		},
		fontFamily: {
			heading: 'Poppins',
			body: 'Poppins'
		},
		fontWeight: {
			normal: '400',
			bold: '700'
		}
	},
	plugins: []
};
