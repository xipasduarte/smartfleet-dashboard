module.exports = function override(config, env) {
  return require("react-app-rewire-emotion")(config, env, {
    inline: process.env.NODE_ENV !== "production"
  });
};
