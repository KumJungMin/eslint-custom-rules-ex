const fs = require("fs");
const rules = require("./rules");
const pkg = JSON.parse(
  fs.readFileSync(new URL("../package.json", import.meta.url), "utf8")
);

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  rules,
  configs: {},
  processtors: {},
};

module.exports = plugin;
