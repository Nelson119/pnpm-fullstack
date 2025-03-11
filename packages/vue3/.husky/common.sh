#!/bin/sh

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi

# 動態設置 pnpm 的路徑
# 根據不同的安裝方式，pnpm 可能位於不同的位置
# 這裡添加常見的 pnpm 安裝路徑到 PATH
PATH="$HOME/Library/pnpm:$HOME/.local/bin:/usr/local/bin:$PATH"

# 將 PATH 對於子進程生效
export PATH
