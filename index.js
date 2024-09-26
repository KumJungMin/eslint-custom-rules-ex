const rules = require("./lib/rules");

const plugin = {
  rules,
  rulesConfig: {
    "no-object-hasown": 2,
    "no-console": 2,
  },
};

module.exports = plugin;
