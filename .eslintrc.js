module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-typescript/base',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.eslint.json',
  },
  rules: {
    'max-len': ['error', { code: 100, ignoreUrls: true }],
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'max-classes-per-file': 0,
    'no-await-in-loop': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    'no-multi-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'import/prefer-default-export': 0,
  },
  overrides: [
    {
      "files": [
        "**/*.test.ts",
        "**/*.spec.ts"
      ],
      "env": {
        "mocha": true
      }
    }
  ]
};
