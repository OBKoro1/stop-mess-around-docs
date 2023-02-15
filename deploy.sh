###
# Author       : OBKoro1 1677593011@qq.com
# Date         : 2023-02-15 22:34:25
# Last Author  : OBKoro1 1677593011@qq.com
# LastEditTime : 2023-02-15 22:44:42
# FilePath     : /docs-stop-mess-around/deploy.sh
# Description :
# Company 2023-2023. All rights reserved.
###

!/usr/bin/env sh

# localhost 8080
# npm run dev

# 确保脚本抛出遇到的错误
set -e

echo $1

# 生成静态文件
npm run docs:build -- $1

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

ls

git init
git add .
# npm run d 'commit值'
git commit -m $1

echo 'commit1'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

git push -f git@github.com:OBKoro1/stop-mess-around-docs.git master:gh-pages

cd -

echo '根目录'

ls

git add .

git commit -m $1

echo 'commit2'

git push origin master:master # 推到github上

echo '大功告成'

# TODO: 部署传参
# npm run d -- 'commit信息'
