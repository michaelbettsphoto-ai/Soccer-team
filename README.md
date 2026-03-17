# ⚽ YMCA Strikers — Youth Soccer Website

A static, multi-page youth soccer website for a YMCA team of 9–10 year olds. The site hosts practice drills, skill tips, and weekly focus content generated with the [Soccer Practice Coach GPT](https://chatgpt.com/g/g-69b8aa747d4c8191b0a3df88eeb19f5b-soccer-practice-coach).

## 🔗 Live Site

> **[https://michaelbettsphoto-ai.github.io/Soccer-team/](https://michaelbettsphoto-ai.github.io/Soccer-team/)**

## 📄 Pages

| Page | Description |
|------|-------------|
| `index.html` | Home page — hero, featured drill of the week, quick-access cards, CTA banner |
| `drills.html` | Drills Library — 12 drills with category filter and expandable accordion panels |
| `tips.html` | Skill Tips — 16 tips across 4 categories with tabbed navigation |
| `week.html` | This Week's Focus — weekly theme, featured drills, coach's message, and parent prep note |

## 🛠️ Tech Stack

- **Pure HTML5 / CSS3 / Vanilla JavaScript** — no build tools, no frameworks
- **Tailwind CSS** via CDN
- **Google Fonts** (Nunito + Inter) via CDN
- Deployable directly from the repo root to **GitHub Pages**

## 🚀 Deploy to GitHub Pages

1. Go to **Settings → Pages** in this repository
2. Set **Source** to `Deploy from a branch`
3. Select branch `main` and folder `/ (root)`
4. Save — your site will be live at `https://michaelbettsphoto-ai.github.io/Soccer-team/`

## 📁 File Structure

```
/
├── index.html       ← Home page
├── drills.html      ← Full drills library (12 drills, filter + accordion)
├── tips.html        ← Skill tips (16 tips, 4 categories, tabbed)
├── week.html        ← This week's focus
├── style.css        ← Custom styles, animations, pitch texture
├── app.js           ← Nav toggle, drill filter, accordion, tip tabs
└── assets/
    └── css/
        └── theme-anime.css  ← Legacy anime theme (preserved)
```

## ✨ Features

- **Responsive mobile-first layout** — single column on mobile, grid on tablet/desktop
- **Category filter** on drills page — real-time JS filtering, no page reload
- **Expandable accordion** on every drill card — full instructions, Coach's Tip, Parent Note
- **Tabbed navigation** on tips page — switch between skill categories instantly
- **Collapsible Parent Notes** on every tip card
- **Sticky navigation** with hamburger menu on mobile
- **Active nav link** highlighting based on current page
- **Smooth scroll** behavior
- **Accessible** — semantic HTML, `aria-expanded`, `aria-controls`, keyboard navigation
- **Soccer Practice Coach GPT** integration — "Generate More Drills" CTA on every page

## 🎨 Design

- **Colors:** Grass green `#22c55e`, Sky blue `#38bdf8`, Dark slate `#1e293b`
- **Fonts:** Nunito (headings) + Inter (body) via Google Fonts
- **Background:** CSS-only diagonal pitch line pattern
- **Cards:** Rounded corners, drop shadows, hover lift effect

## 📝 Content

All drill and tip content is written in the voice of the [Soccer Practice Coach GPT](https://chatgpt.com/g/g-69b8aa747d4c8191b0a3df88eeb19f5b-soccer-practice-coach). Every drill includes a Coach's Tip and Parent Note. Every tip includes a collapsible Parent Note.

---

*Built for GitHub Pages — no build tools required.*
