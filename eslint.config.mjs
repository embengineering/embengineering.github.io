// @ts-check
import react from 'eslint-plugin-react';
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended),
  {
    plugins: {
      react
    },
    ignores: ['node_modules', 'dist']
  },

  eslintPluginPrettierRecommended,
];


