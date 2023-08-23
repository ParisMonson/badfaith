module.exports = function (api) {
  // This will cache the returned configuration and avoid recalculating in future calls
  api.cache(true);

  // Check if the environment is test
  if (api.env("test")) {
    return {
      presets: ["@babel/preset-react"],
      // ... any other plugins or configurations for testing
    };
  }

  // Return other configurations or nothing for non-test environments
  return {};
};
