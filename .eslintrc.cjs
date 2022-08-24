module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:import/recommended',
    'airbnb-base',
    'prettier',
  ],
  settings: {
    // https://stackoverflow.com/a/67847853/9863318
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    // https://stackoverflow.com/a/44939592/9863318
    "import/no-extraneous-dependencies": [
      "error", { 'devDependencies': true },
    ],
  },
};
