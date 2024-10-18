# How to git diff

### how to git diff current changes

```bash
git diff .
```

Most of the times, during development after done implemented the feature and before commit a message
most likely we want to do a quick views on what's been changes, so that we can make sure we changed only
what needs, to do that run `git diff .`

### how to git diff between commits

```bash
git diff [commit]..[commit]

git diff 18c1d73f..0c5a7049 // comparing 18c... with 0c5...
```

In such a rare case, somehow we want to compare the changes between to commit.
We can do that by running `git diff commit-ref..commit-ref`

### how to git diff between branch

```bash
git diff [branch] -- [branch]

git diff develop -- master // comparing develop to master
```

Probably this is not the case most of time, comparing changes between two branches.
To do that, we can use `git diff develop -- master`

### how to git diff between file

```bash
git diff [branch] [branch] [path/to/file]
```

Probably this is most likely to be commons use case of `git diff` which is comparing between file in two differences branch.
To do that, we can use `git diff develop master package.json`
