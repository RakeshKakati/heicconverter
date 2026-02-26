# HEIC → Any Format

Convert HEIC/HEIF images to JPEG, PNG, or GIF in your browser. No server uploads—conversion runs entirely client-side using [heic2any](https://github.com/alexcorvi/heic2any).

## Features

- **Drag & drop** or click to select HEIC/HEIF files
- **Output formats:** JPEG, PNG, GIF
- **Quality slider** for JPEG
- **Instant preview** and download of the converted image

## Run locally

Open `index.html` directly in a browser, or serve the folder over HTTP (recommended for best compatibility with the library’s workers):

```bash
# Option 1: Python
python3 -m http.server 8080

# Option 2: Node (npx)
npx serve -p 8080
```

Then visit **http://localhost:8080**.

## Tech

- Single-file HTML/CSS/JS
- [heic2any](https://www.npmjs.com/package/heic2any) via jsDelivr CDN
- No build step, no backend

## License

MIT
