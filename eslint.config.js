import react from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    plugins: {
      react,
    },
    ignores: ['node_modules', 'dist'],
  },
  eslintPluginPrettierRecommended,
];
