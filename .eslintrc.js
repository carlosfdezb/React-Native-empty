module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'react-native',
    'react-hooks'
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
  },
  globals: {
    fetch: false
  }
};
