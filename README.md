# zenji-src

## 初期設定
.env.exampleにdockerのmysqlへの接続情報を記載済
```
cp .env.example .env
```

## GAEデプロイ前にやる

以下コマンドでberglasを使用して認証情報を落としてくる。生成されるenv.yamlはgitignore済
```
echo -en "env_variables:\n"\
"  APP_KEY: `berglas access zenji-production-secrets/laravel_app_key`" > env.yaml
```
