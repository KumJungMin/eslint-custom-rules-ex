const rules = require("./lib/rules");

const plugin = {
  rules, // 룰을 정의
  configs: {}, // 사용자가 구성할 수 있는 설정들
  processors: {}, // 파일 전처리기 등
};

module.exports = plugin;
