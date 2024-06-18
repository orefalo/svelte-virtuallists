import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		// IMPORTANT: if you update aliases, run `pnpm run dev` for the configuration to update (tsconfig.json)
		alias: {
			'svelte-virtuallists': path.resolve('.', 'src/lib'),
			$comp: path.resolve('./src/comp')
		},
		paths: {
			base: process.env.BASE_PATH,
			relative: false
		}
	}
};

export default config;
