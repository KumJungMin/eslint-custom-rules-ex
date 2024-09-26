const { RuleTester } = require("eslint");
const rule = require("../lib/rules/no-object-hasown");

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
  },
});

ruleTester.run("no-object-hasown", rule, {
  valid: [
    {
      code: 'const hasProperty = "prop" in obj',
    },
  ],
  invalid: [
    {
      code: 'Object.hasOwn(obj, "prop")',
      errors: [
        {
          message:
            "호환성 오류: 모바일 최소 버전(Andriod 6.0, IOS 12.0)에서 지원하지 않는 문법입니다.",
        },
      ],
      output: '"prop" in obj',
    },
  ],
});
