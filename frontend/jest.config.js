// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transforma arquivos JS moderno e TS
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios)/)', // Inclui axios para transformação
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock de arquivos CSS
  },
};
