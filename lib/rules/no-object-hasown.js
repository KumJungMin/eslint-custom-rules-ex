const rule = {
  meta: {
    type: "problem", // 문제를 야기할 수 있는 코드 검출
    docs: {
      description:
        "Object.hasOwn 메서드는 Android 6.0 및 iOS 12.0 이전 버전에서 지원되지 않으므로, in 연산자로 대체하는 룰입니다.",
      category: "Compatibility", // 호환성 관련 문제
      recommended: true, // 기본 설정에서 추천하는 룰인지 여부
    },
    schema: [],
    fixable: "code", // 자동 수정이 가능한 코드임을 명시
  },
  create(context) {
    return {
      'MemberExpression[object.name="Object"][property.name="hasOwn"]': (
        node
      ) => {
        context.report({
          node,
          message:
            "호환성 오류: 모바일 최소 버전(Andriod 6.0, IOS 12.0)에서 지원하지 않는 문법입니다.",
          fix(fixer) {
            const sourceCode = context.getSourceCode();
            const callExpression = node.parent;

            const objectText = sourceCode.getText(callExpression.arguments[0]);
            const propertyText = sourceCode.getText(
              callExpression.arguments[1]
            );

            return fixer.replaceText(
              callExpression,
              `${propertyText} in ${objectText}`
            );
          },
        });
      },
    };
  },
};

module.exports = rule;
