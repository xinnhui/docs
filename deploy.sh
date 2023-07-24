#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 根目录 docs 提交用户
DOCS_COMMITTER_NAME=$(git config user.name)
DOCS_COMMITTER_EMAIL=$(git config user.email)

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.name "$DOCS_COMMITTER_NAME"
git config user.email "$DOCS_COMMITTER_EMAIL"
echo "user.name $(git config user.name)"
echo "user.email $(git config user.email)"

. ../../../checkCommit.sh

git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:xinnhui/docs.git master:gh-pages

cd -