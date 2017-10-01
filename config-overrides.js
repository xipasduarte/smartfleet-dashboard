/* eslint-disable import/no-extraneous-dependencies */
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = config => injectBabelPlugin("babel-macros", config);
