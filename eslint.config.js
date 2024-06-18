import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import markdown from 'eslint-plugin-markdown';
import globals from 'globals';

const __dirname = import.meta.dirname;

import pkg from 'eslint-gitignore';
const { readGitignoreFiles } = pkg;

function removeDuplicates(arr) {
	return arr.filter((value, index, self) => self.indexOf(value) === index);
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	...markdown.configs.recommended,
	{
		// 1. Add the plugin
		plugins: {
			markdown
		}
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				NodeJS: true
			}
		}
	},
	{
		// 2. Enable the Markdown processor for all .md files.
		files: ['**/*.md'],
		processor: 'markdown/markdown'
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
        // 1. Target ```js code blocks in .md files.
        files: ["**/*.md/*.js"],
        rules: {
            // 2. Disable other rules.
            "no-console": "off",
            "import/no-unresolved": "off"
        }
    },
	{
		ignores: removeDuplicates([...readGitignoreFiles({ cwd: __dirname }), '**/.svelte-kit/', '**/_app/', 'package/'])
	},
	{
		rules: {
			eqeqeq: 'error',
			'prefer-const': 'off',

			'@typescript-eslint/no-explicit-any': 'off',
			// this will configure:
			// const _a = 'unused, with underscore, no warning'
			// const b = 'unused, no underscore, warning'
			// note you must disable the base rule
			// as it can report incorrect errors
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn', // or "error"
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			// We need to use {@html} in the demo site for code highlight
			'svelte/no-at-html-tags': 'off',
			// css is global and incorrectly reported as unused by the linter
			'svelte/valid-compile': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-unused-expressions': 'off'
		}
	}
];
