---
sidebar_label: '🚀 git cheat sheet'
sidebar_position: 1
---

# git cheat sheet

## Staging area

### Unstage the change

```bash
git reset HEAD <source>
```

### Restore file from repository

```bash
git checkout HEAD <source>
```

### Remove file

```bash
git rm <source>
```

### Move file

```bash
git mv <source> <destination> 
```

### Add changes in the working directory to the staging area

```bash
git add .
```

> The `staging area` lets you construct your next commit in a logical, structure fashion.

> Moving files around and deleting them from the filesystem, without notifying Git, will cause you grief.

## .gitignore

### Ignore all files that match this pattern

```bash
*.<pattern-name>
```

### Ignore all files that aren't in the top-level directory

```bash
*/*.<pattern-name>
```

### Despite any higher-level rules, don't ignore any files

```bash
!/*.<pattern-name>
```

### Looking at the global .gitignore

```bash
git config --global core.excludesfile
```

### Create global .gitignore

```bash
touch ~/.gitignore_global
```

### Set global .gitignore

```bash
git config --global core.excludesfile ~/.gitignore_global
```

### Sample .gitignore files

`https://github.com/github/gitignore`

> **.gitignore** lets you configure Git so that it ignores specific files or files that match a certain pattern.

> `!` negates a matching rule.

## Log & history

### Limiting results

```bash
git log -<number>
```

### Compact view of the repository history

```bash
git log --oneline
```

### Graphical view of the repository

```bash
git log --graph
```

### Compact graphical view of the repository

```bash
git log --graph --oneline
```

### Viewing non-ancestral history

```bash
git log --oneline --graph --all
```

### Summary of the commits

```bash
git shortlog
```

### Searching git history

#### Names

`Name that consists of one part;`

```bash
git log --author=kaanf --oneline
```

`Name that consists of two or more parts;`

```bash
git log --author="Kaan Fırat" --oneline
```

#### Words

```bash
git log --grep=<word> --oneline
```

#### Single file

```bash
git log --oneline <source>
```

#### Directory

```bash
git log --oneline <directory>
```

> This shows you all the changes that happened in that directory, but it’s not clear which files were changed.

#### Detailed information 

```bash
git log --oneline --stat <directory>
```

#### Commits that deal with the term

```bash
git log-S"<term>"
```

#### Commits that deal with the term - (detailed)

```bash
git log-S"<term>" -p
```

#### Commits on other branches

```bash
git log --all -S"<term>"
```

## Branching

### Create new branch 

```bash
git branch <branch-name>
```

### Checking current branch

```bash
git branch
```

### Switching to another branch 

```bash
git checkout <branch-name>
```

### Delete branch

```bash
git branch -d <branch-name>
```

## Merging

### Fast forward merge commit

```bash
git merge <branch-name> --no-ff
```

### Commits that are not in main branch

```bash
git log <branch-name> --not <main-branch>
```

## Remote repository

### Change workstation branch (master -> main)

```bash
git branch -M main
git push -u origin main
```

## Basics

### Set up a Git repository

```bash
git init
```

### Add a remote repository to local

```bash
git remote add origin <remote-url>
```

