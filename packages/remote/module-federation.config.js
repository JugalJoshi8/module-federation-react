const { dependencies } = require("./package.json");

module.exports = {
  name: "mfe",
  exposes: {
    "./app": "./src/App",
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
};
