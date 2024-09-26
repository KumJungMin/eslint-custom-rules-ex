const fs = require("fs");
const rules = require("./lib/rules");
const path = require("path");

const packageJson = fs.readFileSync(
  path.join(__dirname, "package.json"),
  "utf8"
);
const pkg = JSON.parse(packageJson);

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
