#!/bin/bash

DIR=$(dirname "$0")
cd "$DIR"

echo -e "\n\n------------------------------------------"
read -p "Briefly describe your changes: " CHANGES
git add -A
git commit -m "${CHANGES}"

echo -e "\n\n------------------------------------------"
echo -e "Pushing your changes now."
echo -e "You'll be prompted for your GitHub username and password."
echo -e "------------------------------------------\n\n"
git push