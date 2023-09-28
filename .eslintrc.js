module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    'no-trailing-spaces': ['error', { ignoreComments: true }],
  },
  plugins: ['json-format'],
};
