module.exports = {
  moduleNameMapper: {
    '@env/(.*)': '<rootDir>/src/environments/$1',
  },
  preset: 'jest-preset-angular',
    globalSetup: 'jest-preset-angular/global-setup',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
