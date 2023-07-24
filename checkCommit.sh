#!/usr/bin/env sh
# . "$(dirname -- "$0")/_/husky.sh"

# 获取并显示当前目录
current_dir=$(pwd)
echo "当前目录为：$current_dir"

# 获取提交者的邮箱地址
COMMITTER_EMAIL=$(git config user.email)

# 定义合法邮箱地址的正则表达式
VALID_EMAIL_REGEX='^.*@qq\.com$'

# 检查邮箱地址是否满足要求
if ! [[ "$COMMITTER_EMAIL" =~ $VALID_EMAIL_REGEX ]]; then
  echo "Error: Only users with @qq.com email addresses are allowed to commit."
  exit 1
fi
# 获取当前日期和时间
CURRENT_DAY=$(date +%u)
CURRENT_TIME=$(date +%H:%M)

# 定义不允许提交的时间范围
ALLOWED_START_TIME="09:00"
ALLOWED_END_TIME="23:00"

# 定义不允许提交的工作日(1-5分别表示周一到周五)
ALLOWED_DAYS=(1 2 3 4 5)

# 将时间转换为分钟数
CURRENT_TIME_MINUTES=$(date -d "$CURRENT_TIME" +%H:%M)
ALLOWED_START_TIME_MINUTES=$(date -d "$ALLOWED_START_TIME" +%H:%M)
ALLOWED_END_TIME_MINUTES=$(date -d "$ALLOWED_END_TIME" +%H:%M)

# 检查是否在允许的时间范围内并且是允许的工作日
if [ "$(expr "$CURRENT_TIME_MINUTES" ">=" "$ALLOWED_START_TIME_MINUTES")" -eq 1 ] && [ "$(expr "$CURRENT_TIME_MINUTES" "<=" "$ALLOWED_END_TIME_MINUTES")" -eq 1 ] && [[ " ${ALLOWED_DAYS[*]} " =~ " ${CURRENT_DAY} " ]]; then
  echo "Error: Code submissions are not allowed between $ALLOWED_START_TIME and $ALLOWED_END_TIME on weekdays (Monday to Friday)."
  exit 1
fi

