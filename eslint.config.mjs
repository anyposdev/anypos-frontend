import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable TypeScript support with type-aware linting
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  // Enable React support
  react: true,
  // Less strict formatting
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  // Ignore generated files
  ignores: [
    '**/routeTree.gen.ts',
  ],
  // Custom rules
  rules: {
    'no-console': 'off', // Allow console in POS apps
    'react/prefer-destructuring-assignment': 'off',
    'react-refresh/only-export-components': 'off', // Allow feature exports
    'ts/strict-boolean-expressions': 'off', // Allow {string && (...)} pattern
    'ts/no-unsafe-assignment': 'off', // Allow passing values without explicit typing
    'ts/no-misused-promises': 'off'
  },
})
