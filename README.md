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

## Deploy on Vercel

1. **Create a GitHub repo** (one-time):
   - Go to [github.com/new](https://github.com/new)
   - Name it e.g. `heicconverter`, set visibility, then **Create repository** (do not add a README or .gitignore—you already have them)

2. **Push this project** (from the project folder):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/heicconverter.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - **Add New Project** → import your `heicconverter` repo
   - Leave build settings as default (no build command; output is the root)
   - Click **Deploy**. Your site will be live at `https://heicconverter-*.vercel.app` (or your custom domain).

## Tech

- Single-file HTML/CSS/JS
- [heic2any](https://www.npmjs.com/package/heic2any) via jsDelivr CDN
- No build step, no backend

## License

MIT
