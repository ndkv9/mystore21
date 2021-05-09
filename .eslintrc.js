module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
		'jest/globals': true,
		'cypress/globals': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:cypress/recommended',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
		ecmaVersion: 12,
	},
	plugins: ['react', 'jest', 'cypress'],
	rules: {
		indent: 0,
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		eqeqeq: 'error',
		'react/prop-types': 0,
		'no-trailing-spaces': 'error',
		'object-curly-spacing': ['error', 'always'],
		'arrow-spacing': ['error', { before: true, after: true }],
		'no-console': 'error',
		'no-unused-vars': 'error',
		'unexpected-token-default': 0,
	},
}
