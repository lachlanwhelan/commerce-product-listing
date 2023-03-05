const config = {
  collectCoverage: true, // nables collecting coverage
  collectCoverageFrom: ['src/**/*.{js,jsx}'], //specifies files to collect coverage from this will be from files files in all .js and jsx from src folder
  coverageDirectory: 'coverage', //specifies folder jest will put coverage files
  testEnvironment: 'jsdom', //The test environment that will be used for testing note that we are setting it to jsdom and this will be coming from @testing-library/jest-dom and jest-environment-jsdom packages we installed earlier.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], //this will tell jest for every test we write it will load configuration
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
}
};

module.exports = config;