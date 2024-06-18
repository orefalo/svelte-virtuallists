import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: '200.html'
		}),
		// IMPORTANT: if you update aliases, run `pnpm run dev` for the configuration to update (tsconfig.json)

		alias: {
			'svelte-virtuallists': path.resolve('.', 'src/lib'),
			$comp: path.resolve('./src/comp')
		},
		paths: {
			// Usually the base path will be the root (i.e. defaults by kit to the empty "" path since the env var is undefined),
			//  but on the official documentation build we set this environment
			//  variable to the base path where we're deploying to.
			base: process.env.BASE_PATH
		}
	}
};

export default config;
