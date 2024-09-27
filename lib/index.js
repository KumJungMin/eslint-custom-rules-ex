const rules = require("./rules");

const plugin = {
  rules, // 규칙 정의
  configs: {
    recommended: {
      rules: {
        "my-eslint-test-example-plugin/no-object-hasown": "error",
        "my-eslint-test-example-plugin/no-alert": "error",
      },
    },
  },
};

module.exports = plugin;
