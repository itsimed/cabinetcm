import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Disable all rules
      ...Object.fromEntries(
        Object.keys(reactHooks.configs.recommended.rules).map(rule => [rule, 'off'])
      ),
      'react-refresh/only-export-components': 'off',
      // Disable TypeScript ESLint rules
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-namespace-keyword': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/type-annotation-spacing': 'off',
      '@typescript-eslint/unified-signatures': 'off',
      // Disable general ESLint rules
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      'prefer-const': 'off',
      'no-var': 'off',
      'no-empty': 'off',
      'no-constant-condition': 'off',
      'no-dupe-keys': 'off',
      'no-dupe-args': 'off',
      'no-dupe-class-members': 'off',
      'no-dupe-else-if': 'off',
      'no-duplicate-imports': 'off',
      'no-func-assign': 'off',
      'no-import-assign': 'off',
      'no-obj-calls': 'off',
      'no-redeclare': 'off',
      'no-setter-return': 'off',
      'no-sparse-arrays': 'off',
      'no-unreachable': 'off',
      'valid-typeof': 'off'
    },
  },
)
