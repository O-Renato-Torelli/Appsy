// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',           // Ambiente de simulação de navegador
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest' // Transforma arquivos JS/TS com Babel
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios)/)',      // Compila o axios, mesmo dentro de node_modules
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock para arquivos CSS
  },
};
