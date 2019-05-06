module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*))'
  ]
};
