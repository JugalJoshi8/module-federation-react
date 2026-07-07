const { dependencies } = require("./package.json");
const path = require("path");

module.exports = {
  name: "container",
  remotes: {
    //  mfe1: "mfe@http://localhost:3001/remoteEntry.js",
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
    "react/jsx-runtime": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies.react,
    },
    "react/jsx-dev-runtime": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies.react,
    },
  },
  // runtimePlugins: [path.resolve(__dirname, './custom-runtime-plugin.js')]
};
