module.exports = {
    preset: 'ts-jest',
    roots: [
        "./test"
    ],
    testEnvironment: 'node',
    setupFiles: ['dotenv/config']
}