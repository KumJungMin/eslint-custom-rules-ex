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
