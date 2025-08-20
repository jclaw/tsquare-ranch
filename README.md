# tsquare-ranch
Run a simple server with `python3 -m http.server`

## Images
To minify images:
```
npm run minify-img --src='./assets/winter-9.jpeg'
```
The rotation of the new image may need to be fixed.


To copy the metadata from one image to another:
```
exiftool -overwrite_original -TagsFromFile source.jpeg -all:all target.jpeg
```