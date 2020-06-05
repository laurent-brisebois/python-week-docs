# Git Commands

## General commands

```sh
# verify global configuration
git config --global user.name
git config --global user.email

# change global username and email
git config --global user.name l-dawg
git config --global user.email ldawg@email.ca

# clone a repo
git clone <https://repo.git>  # >>> clone a git repository in your current directory

# see status of current working directory
git status

# stage some changes in index.html file
git add index.html

# commit staged changes
git commit -m "fixed links to about page"

# push changes to remote
git push

# pull remote changes locally
git pull
```

## Committing to a repo workflow

```sh
# add all new changes to the next commit
git add .
git commit -m "new hello function"
git push

# add specific file to next commit
git add ./examples/readme.md
git commit -m "add readme example"
git push
```
