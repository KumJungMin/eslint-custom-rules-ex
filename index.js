const rules = require("./lib/rules");

const plugin = {
  rules, // 규칙 정의
  configs: {
    recommended: {
      rules: {
        "my-eslint-plugin/no-object-hasown": "error",
        "my-eslint-plugin/no-console": "error",
      },
    },
  },
};

module.exports = plugin;
