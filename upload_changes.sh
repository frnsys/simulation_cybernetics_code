#!/bin/bash

DIR=$(dirname "$0")
cd "$DIR"

read -p "Briefly describe your changes: " CHANGES
git add -A
git commit -m "${CHANGES}"

echo "Pushing your changes now."
echo "You'll be prompted for your GitHub username and password."
git push