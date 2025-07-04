const { dependencies } = require('./package.json');

module.exports = {
  name: "container",
    remotes: {
        mfe1: "mfe@http://localhost:3001/remoteEntry.js",
      },
      filename: "remoteEntry.js",
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react-dom"],
        },
      }
};