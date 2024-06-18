import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { exampleImportPlugin } from './scripts/vite/example-import.js';
import { minifiedSizeAnalyzingPlugin, manualChunksForAnalyzing } from './scripts/vite/minified-size-analyzing.js';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [sveltekit(), exampleImportPlugin(), minifiedSizeAnalyzingPlugin()],
	optimizeDeps: {
		include: ['highlight.js', 'highlight.js/lib/core']
	},
	build: {
		// minify: true, // We specify this explicitly, since we need the server code to be minified for size computation.
		rollupOptions: {
			output: {
				manualChunks: manualChunksForAnalyzing
			}
		}
	}
});
