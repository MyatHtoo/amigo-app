module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      ['nativewind/babel', { tailwindcssPath: './tailwind.config.js' }]
    ],
    plugins: [
      'react-native-reanimated/plugin',
    ],
  };
};
