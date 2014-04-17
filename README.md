git-status
==========

Quickly check which projects have uncommited code.

It just runs `git-status -s` on every folder in the current working dir and
logs the result.

It could probably be written as a simple bash script...

## Install

This is not going to be published on NPM so you need to install it from github.

```
git clone https://github.com/stayradiated/git-status.git
cd git-status
npm link
```

## Usage

```
git-status [-b]
```

**Options:**

- `-b`: Show git branch

## Example Output

```
> git-status
[git] git-status
M index.js
M bin/git-status
```
