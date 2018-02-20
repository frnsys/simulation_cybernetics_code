#!/bin/bash

DIR=$(dirname "$0")
cd "$DIR"

read -p "Which site do you want to run? (e.g. basic_1) " SITE

if [ ! -d "$SITE" ]; then
    echo "That site doesn't seem to exist"
    exit 1
fi

echo "Running the server now. Press Ctrl+C a few times to shut it down"
echo "Open up localhost:8000 in your browser"
cd "$DIR/$SITE"
python2.7 -m SimpleHTTPServer 8000