## How do I get to the repo folder in the terminal?

1. Open the Terminal app
2. Type `cd ` (note the space) and then drag-and-drop the repo folder (`simulation_cybernetics_code`). It should autocomplete in the terminal.
3. Hit enter

If you type `pwd` in the terminal and hit enter you should see `simulation_cybernetics_code` somewhere in the output.


## How do I view my site on my computer?

1. First navigate to the repo folder in the terminal (see above)
2. Then run `python2.7 -m SimpleHTTPServer 8000` to start the server on port 8000.
3. Visit `localhost:8000` in your browser. If you want to see a specific sub-site, e.g. `basic_1`, instead go to e.g. `localhost:8000/basic_1`.
4. When you want to shutdown the server, go back to the terminal and hit `Ctrl+C`. You'll see a bunch of output that's safe to ignore.

## How do I upload my changes to GitHub?

1. First navigate to the repo folder in the terminal (see above)
2. Then we need to add the files we want to save by running `git add -A`.
3. Afterwards we need to _commit_ these changes with `git commit -m "MESSAGE"`, where `MESSAGE` is a message reminding us what changes were made. For instance, if I changed the background color, I might want to use `git commit -m "changed background color"`.
4. Then we upload ("push") the changes to GitHub with `git push`.

## How do I get the latest reference code?

1. First navigate to the repo folder in the terminal (see above)
2. Then run `git fetch upstream`.
3. Then run `git merge upstream/master`.

## Reference

- p5 reference: <https://p5js.org/reference/>
- p5.gui: <https://github.com/bitcraftlab/p5.gui>
- look up keycodes: <http://keycode.info/>
- p5.js tutorials: <https://www.youtube.com/user/shiffman/playlists?shelf_id=14&sort=dd&view=50>
