# Next.js + PlayWrightサンプルプロジェクト

## 動かし方

- 環境変数のセットアップ

  以下の値を設定する必要あり

  ```txt
  NEXTAUTH_URL=http://localhost:3000
  NEXTAUTH_SECRET=yours
  GITHUB_CLIENT_ID=yours
  GITHUB_CLIENT_SECRET=yours
  DATABASE_URL="postgresql://udemy:udemy@localhost:5434/udemy?schema=public"
  ```

  `NEXTAUTH_SECRET` については [ https://generate-secret.vercel.app/32]( https://generate-secret.vercel.app/32) にて作成が可能

  `GITHUB_CLIENT_ID` と `GITHUB_CLIENT_SECRET` については [https://github.com/settings/developers](https://github.com/settings/developers) の `OAuth App`にて作成が可能

  - HomePage URL: `http://localhost:3000` 
  - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

- インストール
  
  ```bash
  bun install
  ```

- ビルド

  ```bash
  bun run build
  ```

- 起動

  ```bash
  bun run dev
  ```

- DB起動

  ```bash
  docker compose up -d
  ```

  以下の様に起動していればOK!

  ```bash
  NAME                                   IMAGE                  COMMAND                   SERVICE        CREATED         STATUS         PORTS
  e2e-nextjs-playwright-dev-postgres-1   postgres:14.4-alpine   "docker-entrypoint.s…"   dev-postgres   9 seconds ago   Up 8 seconds   0.0.0.0:5434->5432/tcp
  ```

- DB停止

  ```bash
  docker compose rm -s -f -v
  ```

- DBのマイグレーション

  ```bash
  npx prisma migrate dev
  ```

  別ターミナルで以下のコマンドを実行することで[ブラウザ](http://localhost:5555/)からDBのテーブルを管理できる

  ```bash
  npx prisma studio
  ```

- Playwrightテスト実行

  ```bash
  bun run test
  ```

## Next.js project setup

#### Next.js
```bash
# create-next-app
# npx create-next-app --example with-tailwindcss nextjs-e2e --use-npm
npx create-next-app@13.2.5-canary.34 --tailwind nextjs-e2e --use-npm
npm i next@13.2.5-canary.34
```
```bash
# install package
npm i next-auth@4.18.6 @prisma/client@4.8.0 @next-auth/prisma-adapter@1.0.5 date-fns@2.29.3 zustand@4.1.5 zod@3.20.2 @heroicons/react@2.0.13
```
```bash
# install package
npm i -D prisma@4.8.0 @playwright/test@1.29.0
```
```bash
# install playwright
npx playwright install
```

#### Postgres DB

~~~bash
# start db
docker compose up -d
# remove db
docker compose rm -s -f -v
~~~

#### Prisma

~~~bash
# init
npx prisma init
# migrate
npx prisma migrate dev
# gen types
npx prisma generate
~~~
