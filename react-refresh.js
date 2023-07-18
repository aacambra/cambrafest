const ReactRefreshWebpackPlugin = require("@next/react-refresh-utils/ReactRefreshWebpackPlugin");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new ReactRefreshWebpackPlugin());
    }
    return config;
  },
};
