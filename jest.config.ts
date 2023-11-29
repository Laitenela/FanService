export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
    // process `*.tsx` files with `ts-jest`
  },
  rootDir: './',
  collectCoverage: true,
  coveragePathIgnorePatterns: ["^.*\\.spec\\.[jt]s?$"],
  testPathIgnorePatterns: ["^.*\\.spec\\.[jt]s?$"],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/shared/storybook/__mocks__/fileMock.ts',
    '\\.(css|less|scss)$': '<rootDir>/src/shared/storybook/__mocks__/styleMock.ts',
  },
}