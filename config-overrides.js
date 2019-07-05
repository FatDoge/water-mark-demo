const path = require('path');
const { override, useBabelRc, addWebpackAlias } = require('customize-cra'); 

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
  })
)