module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  restoreMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
};
