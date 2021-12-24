const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@app": "src/app",
        "@core": "src/modules/core",
        "@shared": "src/modules/shared",
        "@feature": "src/modules/feature"
    })(config);
    return config;
};