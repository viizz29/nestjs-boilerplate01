// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      // Note: NestJS is typically ESM now, but if you need CommonJS, keep this.
      sourceType: 'module', 
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      // Explicitly disable indentation rules that conflict with Prettier
      'indent': 'off',
      '@typescript-eslint/indent': 'off',
      // Force Prettier to handle line endings and spacing
      "prettier/prettier": ["error", { 
        "endOfLine": "auto",
        "tabWidth": 2,
        "useTabs": false 
      }],
    },
  },
  // ALWAYS keep this as the last item in the array
  eslintPluginPrettierRecommended,
);