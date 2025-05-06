// import importPlugin from 'eslint-plugin-import'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import globals from 'globals'
import tseslint from 'typescript-eslint'
export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, eslintConfigPrettier, {
  ignores: ['dist'],
  files: ['**/*.{ts,tsx,js,jsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...globals.browser,
    },
  },
  plugins: {
    // import: importPlugin,
  },

  rules: {},
})
