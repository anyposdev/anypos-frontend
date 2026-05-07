import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable TypeScript support
  typescript: true,
  // Enable React support
  react: true,
  // Less strict formatting
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  // Custom rules
  rules: {
    'no-console': 'off', // Allow console in POS apps
    'react/prefer-destructuring-assignment': 'off',
    'react-refresh/only-export-components': 'off', // Allow feature exports
  },
})
