module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "console 사용을 지양해주세요.",
      category: "Possible Errors",
      recommended: false,
    },
    schema: [],
  },
  create: function (context) {
    return {
      MemberExpression(node) {
        if (node.object.name === "console") {
          context.report({
            node,
            message: "console을 제거해주세요.",
          });
        }
      },
    };
  },
};
