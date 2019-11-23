module.exports = {
    globalSetup: './setup',
    globalTeardown: './teardown.js',
    testEnvironment: './mongo-environment.js',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.ts?$': 'ts-jest'
    },
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    preset: 'ts-jest'
};