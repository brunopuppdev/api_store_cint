import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverageFrom: [
    '**/*.(t|j)s'
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  // Correção na sintaxe do moduleNameMapper
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  roots: ['<rootDir>'],
};

export default config;