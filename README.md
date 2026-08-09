# Zaid Salman — Portfolio

Personal portfolio for **Generative AI / Agentic AI / AI Platform Engineer**.

**Live URL (after you enable Pages):**  
`https://salman167.github.io`  
or  
`https://salman167.github.io/portfolio/`  
(depending on how you publish)

---

## What’s included

| File | Purpose |
|------|---------|
| `index.html` | Portfolio page |
| `styles.css` | Layout & theme |
| `script.js` | Scroll animations |
| `README.md` | Hosting guide |

---

## Option A — Host as user site (recommended)

Creates: **https://Salman167.github.io**

1. Create a new GitHub repo named exactly: **`Salman167.github.io`**
2. Upload these files to the **root** of that repo (`index.html`, `styles.css`, `script.js`)
3. Go to **Settings → Pages**
4. Source: **Deploy from a branch**
5. Branch: **`main`** / folder: **`/ (root)`** → Save
6. Wait 1–2 minutes, open `https://salman167.github.io`

### Git commands (from this folder)

```bash
cd portfolio
git init
git add index.html styles.css script.js README.md
git commit -m "Add AI Platform Engineer portfolio"
git branch -M main
git remote add origin https://github.com/Salman167/Salman167.github.io.git
git push -u origin main
```

Then enable GitHub Pages as above.

---

## Option B — Host inside an existing repo

Creates: **https://salman167.github.io/&lt;repo-name&gt;/**

1. Push the `portfolio/` folder to any repo (e.g. `Enterprise-rag-platform` or a new `portfolio` repo)
2. **Settings → Pages** → branch `main` → folder `/docs` **or** `/ (root)` if the site files are at root
3. If using a project site, set Pages to the folder that contains `index.html`

---

## Local preview

Open `index.html` in a browser, or:

```bash
cd portfolio
python -m http.server 5500
```

Visit `http://localhost:5500`

---

## Customize later

- Update project links in `index.html`
- Replace email / phone if needed
- Add screenshots under a `assets/` folder and embed in the projects section

---

## Contact

- Email: zaid.cloudsre@gmail.com  
- LinkedIn: https://linkedin.com/in/zaidsalman/  
- GitHub: https://github.com/Salman167  
- RAG project: https://github.com/Salman167/Enterprise-rag-platform
