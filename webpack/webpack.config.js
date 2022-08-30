const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfigs = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfigs);

  return config;
};
