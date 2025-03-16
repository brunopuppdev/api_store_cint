module.exports = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  singleQuote: true,
  trailingComma: 'all',
  importOrder: ['^@nestjs/(.*)$','','<THIRD_PARTY_MODULES>', '', '^[./]'],
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  semi: true,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'lf',
};