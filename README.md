# tsquare-ranch
Run a simple server with `python3 -m http.server`

## Images
To re-minify all images:
```
npx sharp \ 
  -i './assets/*.{jpg,jpeg,png}' \
  -o '{dir}/{name}--web{ext}' \
  resize 1400 --withoutEnlargement  --fit inside \
  --mozjpeg -q 75 --progressive \
  --compressionLevel 9
```