# tristan-weeden-p2

## To Start

1. Clone repo
2. cd dinner-decider
3. npm install
4. npm start

If having issues with local storage and viewing saved recipies, open chrome dev tools, navigate to application tab, find localhost:3000 and right click to clear localstorage.


Important note: Local storage can only persist strings.

TODO:

In the future I want to allow the user to delete recipies from the saved list and allow the user to load recipies from the saved list. Took a bit longer than expected to figure out local storage to only realize that it can only persist strings. In order to load a recipie we would have to store the recipie ID and then query the API for the recipe ID. 

Fix some styling.

Test responsiveness (looked usable on phone when tested but wasn't as good as desktop)

Fix video iframe sizing
