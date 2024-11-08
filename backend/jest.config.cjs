// jest.config.cjs
module.exports = {
  // Define o preset para TypeScript com Jest
  preset: 'ts-jest',

  // Define o ambiente de teste como 'node'
  testEnvironment: 'node',

  // Especifica os padrões de busca para arquivos de teste
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',         // Inclui arquivos de teste no diretório 'tests'
    '**/?(*.)+(spec|test).[tj]s?(x)'   // Inclui arquivos *.spec.ts, *.test.ts, etc.
  ],

  // Extensões de arquivo reconhecidas e compiladas pelo Jest
  moduleFileExtensions: ['ts', 'js', 'json', 'tsx', 'jsx'],

  // Ignora a pasta node_modules e outras pastas que não devem ser testadas
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',                         // Ignora o diretório de saída de build
    '/build/'                         // Adicione qualquer outro diretório irrelevante aqui
  ],

  // Transforma arquivos .ts e .tsx usando ts-jest, e ignora transformações desnecessárias
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },

  // Ignora transformações de arquivos em node_modules, exceto se você precisar transformar pacotes específicos
  transformIgnorePatterns: [
    '/node_modules/'                   // Modifique para incluir/excluir pacotes específicos se necessário
  ],

  // Habilita relatórios detalhados durante o teste
  verbose: true
};
