const config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/__test__/configure.ts"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/src/__test__/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/__test__/__mocks__/fileMock.js",
  },
};

module.exports = config;
