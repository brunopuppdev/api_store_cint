module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.test.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2023,
    sourceType: 'module',
    allowDefaultProject: true,
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'jest'
  ],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-underscore-dangle': 'off',
    'object-shorthand': ['error', 'always'],
    'func-names': ['error', 'always'],
    'no-var': 'error',
    'no-useless-constructor': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'class-methods-use-this': 'off',
    'jest/no-focused-tests': 'warn',
    'jest/no-test-callback': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'max-classes-per-file': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-unsafe-call': [
    //   'error',
    //   {
    //     exclude: ['$connect', '$disconnect', '$extends'],
    //   },
    // ],
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    settings: {
      'import/resolver': {
        typescript: {
          directory: `${__dirname}/tsconfig.json`,
        },
        node: {
          extensions: ['.js', '.ts'],
        },
      },
    },
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: 'auto',
      },
    ],
  },
};