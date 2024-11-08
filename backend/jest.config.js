module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.[jt]s?(x)', // Configuração para diretório de testes
    '**/?(*.)+(spec|test).[tj]s?(x)' // Configuração padrão para arquivos *.test.ts ou *.spec.ts
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'tsx', 'jsx'], // Extensões reconhecidas
  testPathIgnorePatterns: ['/node_modules/'], // Ignora node_modules
};
