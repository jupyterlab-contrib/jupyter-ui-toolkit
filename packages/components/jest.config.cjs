/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const esModules = ['@microsoft/fast-colors', ''].join('|');

module.exports = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json',
        useESM: true
      }
    ],
    '^.+\\.jsx?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec).ts'],
  transformIgnorePatterns: [`/node_modules/(?!@microsoft|@jupyterlab).+`],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};
