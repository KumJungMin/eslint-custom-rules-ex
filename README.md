### 1. 설치
```bash
npm i https://github.com/KumJungMin/eslint-custom-rules-ex
```

### 2. eslintrc.json 설정
```json
{
  ...
  "plugins": ["my-eslint-plugin"], // 추가
  "extends": [
    ...
    "plugin:my-eslint-plugin/recommended" // 추가
  ],
}

```

### 3. 결과 예시
<img width="1165" alt="스크린샷 2024-09-26 오후 11 16 05" src="https://github.com/user-attachments/assets/8b6a5a52-d536-4842-857b-52601c9c6d31">
