# Download files from xml
1) Open http://geodata.nationaalgeoregister.nl/ahn2/atom/ahn2_5m.xml
2) Right click -> open inspector
3) Click console
4) Paste the js from the `console.js` file in the console
5) Allow popups
6) Copy paste the data from the new tab into a `.txt` file
7) Find and replace the commas (so every url is on a single line)
8) open terminal in the same folder as the `.txt` file
9) run in terminal `xargs -n 1 curl -O < data.txt`
10) wait for download


### Caveats
This downloading is in series. Give it some time.