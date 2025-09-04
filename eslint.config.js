import { defineConfig, globalIgnores } from 'eslint/config'
import friendlyConfig from 'friendly-frontend-lint-config'

export default defineConfig([
  globalIgnores(['dist']),
  ...friendlyConfig,
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
