import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  // Configuración recomendada de Next.js
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      react,
      '@typescript-eslint': typescript,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/display-name': 'warn',
      '@typescript-eslint/no-explicit-any': ['error', {}],
      '@typescript-eslint/no-unsafe-function-type': 'error',

      // Relajar la regla no-unused-vars
      '@typescript-eslint/no-unused-vars': [
        'warn', // Cambiar a 'warn' para no marcar como error
        {
          argsIgnorePattern: '^_', // Ignorar los parámetros que comienzan con _
          varsIgnorePattern: '^_', // Ignorar las variables que comienzan con _
          caughtErrors: 'none', // Ignorar las variables en bloques catch
          ignoreRestSiblings: true, // Ignorar las variables de "rest" si no se usan
        },
      ],

      '@typescript-eslint/no-require-imports': 'error',
    },
    languageOptions: {
      parser: parser,  // Usamos "languageOptions.parser" en lugar de "parser"
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,  // Indica que se usará JSX
        },
      },
      globals: {
        alert: 'readonly',  // Define alert como global
        prompt: 'readonly', // Define prompt como global
        URL: 'readonly',    // Define URL como global
        File: 'readonly',   // Define File como global
        HTMLInputElement: 'readonly', // Define HTMLInputElement como global
        console: 'readonly', // Define console como global
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Configuración de sobrescrituras para directorios específicos
  {
    files: ['.next/**/*', 'node_modules/**/*', 'out/**/*', 'dist/**/*', 'build/**/*'],
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-sparse-arrays': 'off',
    },
  },
];