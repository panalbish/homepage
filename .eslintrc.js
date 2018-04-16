module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'import'],
  rules: {
    'jsx-a11y/label-has-for': [
      2,
      {
        required: 'id'
      }
    ],
    'no-console': [
      'warn',
      {
        allow: ['info', 'time', 'timeEnd', 'warn', 'error']
      }
    ],
    'comma-dangle': [2, 'never'],
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: ['**/*.test.js', '**/*.spec.js'],
        optionalDependencies: false
      }
    ],
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
