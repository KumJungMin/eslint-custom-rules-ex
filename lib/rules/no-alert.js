module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "alert 사용을 지양해주세요.",
      category: "Possible Errors",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        // 호출된 함수가 'alert' 또는 'window.alert'인지 확인
        const callee = node.callee;

        if (
          (callee.type === 'Identifier' && callee.name === 'alert') ||
          (callee.type === 'MemberExpression' &&
            callee.object.name === 'window' &&
            callee.property.name === 'alert')
        ) {
          // alert가 변수로 선언된 경우는 무시
          const alertVariable = context.getScope().variables.find(
            (variable) => variable.name === 'alert'
          );

          if (!alertVariable || alertVariable.defs.length === 0) {
            context.report({
              node,
              message: 'alert을 제거해주세요.',
            });
          }
        }
      },
    };
  },
};
