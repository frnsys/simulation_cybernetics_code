#!/bin/bash

DIR=$(dirname "$0")
cd "$DIR"

echo -e "\n\n------------------------------------------"
read -p "Which site do you want to run? (e.g. basic_1) " SITE

if [ ! -d "$SITE" ]; then
    echo "That site doesn't seem to exist"
    exit 1
fi

echo -e "\n\n------------------------------------------"
echo -e "Running the server now. Press Ctrl+C a few times to shut it down"
echo -e "Open up localhost:8000 in your browser\n\n"
echo -e "------------------------------------------\n\n"

cd "$DIR/$SITE"
python2.7 -m SimpleHTTPServer 8000