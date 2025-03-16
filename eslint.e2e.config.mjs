import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['test/**/*.ts', 'test/**/*.e2e-spec.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.test.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
      globals: {
        jest: true,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    }
  }
];