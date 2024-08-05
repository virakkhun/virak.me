[getting-started](#getting-started)

Here are some basic commands for our daily basis for linux user. whether you are using Ubuntu or any other linux distro.

[files](#files)

to create file we user,

```ts
touch[filename];
```

_example_ : create a file name config.txt

```ts
touch config.txt
```

to delete a file or a dir,

```ts
rm[filename];
```

_example_ : delete a file name config.txt

```ts
// delete a file
rm config.txt
// delete a dir
rm -rf config // -r -> recursive, -f -> force
// delete everything
rm -rf *
NOTE: note that we can't recover the file after using `rm`
```

to create a directory or folder,

```ts
mkdir[dir];
```

_example_ : create a directory or folder

```ts
mkdir config
mkdir -p config/db // create db dir in config
mkdir config src shared // create multiple dirs
```

to list content inside the dir or folder,

```ts
ls;
```

_example_ : to list content inside the dir or folder we use

```ts
// listing the content
ls
package.json  README.md          static  tailwind.config.js  tsconfig.json  vite.config.ts
// listing the content include hidden file
ls -a
.env  .git           .npmrc        .prettierignore
// listing the content with detail
ls -l
-rw-rw-r--   1 virak virak    170 ៨  13 19:51 tailwind.config.js
-rw-rw-r--   1 virak virak    532 ៨   6 11:19 tsconfig.json
// combine -a -l will show everything inside the dir | folder
ls -la
```

to edit a file we can [vim] or [nano] or [vi] ,

```ts
vim[filename];
```

_example_ : let edit a file name config.txt

```ts
vim config.txt
// to insert mode type `i`
// to exist insert mode type `esc`
// to save the file type `esc` + `:wq` or `esc` + `:x`
// to exist the vim without save type `esc` + `:q`
```
