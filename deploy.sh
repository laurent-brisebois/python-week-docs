#!/usr/bin/env sh

# build
vuepress build docs

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git config --local user.name Laurent
git config --local user.email laurent.brisebois@hrsdc-rhdcc.gc.ca
git add -A
git commit -m 'deploy'

git push -f git@work:laurent-brisebois/python-week-docs.git master:gh-pages

cd -
