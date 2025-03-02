import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: staticAdapter({
			pages: 'dist',
			assets: 'dist',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '/virak.me' : process.env.BASE_PATH
		},
		prerender: {
			handleMissingId: 'ignore'
		}
	}
};

export default config;
