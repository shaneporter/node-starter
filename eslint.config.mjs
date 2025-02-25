import eslintPluginTs from '@typescript-eslint/eslint-plugin'
import eslintParserTs from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: eslintParserTs,
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
      'no-console': 'warn',
      ...eslintPluginTs.configs.recommended.rules,
    },
  },
]
