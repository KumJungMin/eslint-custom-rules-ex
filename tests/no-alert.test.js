const config = require('./config')
const { RuleTester } = require("eslint");

const rule = require("../lib/rules/no-alert"); // Adjust this path based on where your custom rule is stored

const ruleTester = new RuleTester(config);

ruleTester.run("no-alert", rule, {
  // Valid test cases where alert is not used
  valid: [
    "console.log('This is fine');",
    "window.confirm('Are you sure?');",
    "let alert = function() {}; alert();",
  ],

  invalid: [
    {
      code: "alert('This is an alert');", 
      errors: [{ message: "alert을 제거해주세요.", type: "CallExpression" }],
    },
    {
      code: "window.alert('Another alert');",
      errors: [{ message: "alert을 제거해주세요.", type: "CallExpression" }],
    },
  ],
});
