import adapter from '@sveltejs/adapter-vercel'
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter({
			// see below for options that can be set here
		})
	}
};
