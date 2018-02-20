#!/bin/bash

DIR=$(dirname "$0")
cd "$DIR"

echo -e "\n\n"
read -p "Briefly describe your changes: " CHANGES
git add -A
git commit -m "${CHANGES}"

echo -e "\n\nPushing your changes now."
echo -e "You'll be prompted for your GitHub username and password.\n\n"
git push