module.exports = {
	root: true,
	extends: ['eslint:recommended'],
	overrides: [
		{ files: ['*.svelte'], processor: 'svelte3/svelte3' },
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
			plugins: ['svelte3', '@typescript-eslint'],
			settings: {
				'svelte3/typescript': () => require('typescript')
			}
		}
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	ignorePatterns: ['*.cjs'],
	env: {
		browser: true,
		es2017: true,
		node: true
	}
}
