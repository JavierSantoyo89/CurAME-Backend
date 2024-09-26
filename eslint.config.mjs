import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
	languageOptions: {
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},
	ignores: [
		'**/node_modules/**',
		'**/dist/**',
		'dist/**',
		'**/*.mjs',
		'eslint.config.mjs',
		'**/*.js',
		'**/*.ts',
		'**/*.tsx',
		'**/*.jsx',
		'**/*.cjs',
		'**/*.json',
	],
})
