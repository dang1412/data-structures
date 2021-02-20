module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js'],
  modulePathIgnorePatterns: ['dist'],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json',
    },
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  collectCoverageFrom: ['src/**/*.{js,ts}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'lcov'],
  verbose: true,
};
