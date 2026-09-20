<div align="center">

<img src="Logo.png" alt="Tune Tutor logo" width="140" />

# 🎵 Tune Tutor

**A responsive front-end demo for an online music-learning platform.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[View Live Demo](https://laveshparyani.github.io/Tune-Tutor/) · [Report an Issue](https://github.com/laveshparyani/Tune-Tutor/issues)

</div>

---

## 📖 About

Tune Tutor is a demo project showcasing an online music-learning platform with a
fully responsive design. It presents the marketing and landing experience for a
service that offers live 1-to-1 online music classes - exploring instruments and
grade exams, booking free demos, viewing class fees, browsing a blog, and reaching
out through a rich footer.

> **Scope note:** This is a **front-end demo**. The landing pages, navigation, and
> footer are fully built, and the primary pages (home, blog, FAQ, book-a-demo, login)
> are implemented. Some navigation links point to additional catalog pages
> (individual instrument, tuner, and grade-exam pages) that are outlined as part of the
> full product but are not included in this demo. There is no backend - forms and
> login are illustrative only.

## 📸 Screenshots

| Home | Explore Classes | Book a Demo |
| :---: | :---: | :---: |
| ![Home](1.png) | ![Explore](2.png) | ![Demo](3.png) |

## ✨ Features

- **Fully responsive layout** - adapts across desktop, tablet, and mobile.
- **Reusable navbar & footer** - injected into every page via `fetch()` for a single source of truth.
- **Hero section** with headline stats (tutors, cities) and a clear call to action.
- **Explore Classes & Grade Exams** grid covering guitar, piano, violin, drums, flute, ukulele, and Indian & Western vocals.
- **Trusted-by / testimonials** carousel with an auto-scrolling track.
- **Book a Free Demo** page and an illustrative **login** page.
- **Blog** and **FAQ** pages.
- **Tailwind CSS** design tokens (custom primary palette, Inter font, gradient & fade-in animations).

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3, [Tailwind CSS](https://tailwindcss.com/) |
| Scripting | Vanilla JavaScript |
| Build tooling | [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) |

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer) and npm

### Installation & build

```bash
# 1. Clone the repository
git clone https://github.com/laveshparyani/Tune-Tutor.git
cd Tune-Tutor

# 2. Install dev dependencies (Tailwind, PostCSS, Autoprefixer)
npm install

# 3. Build the Tailwind stylesheet once...
npm run build

# ...or rebuild automatically while you work
npm run watch
```

### Running the site

Because the navbar and footer are loaded with `fetch()`, the pages must be served
over HTTP (opening `index.html` directly with `file://` will not load the shared
partials). Any static server works, for example:

```bash
npx serve .
```

Then open the printed local URL (e.g. `http://localhost:3000`) in your browser.

## 📂 Project Structure

```
Tune-Tutor/
├── index.html            # Home page
├── blog.html             # Blog page
├── bookdemo.html         # Book a free demo
├── faq.html              # FAQ page
├── login.html            # Login page (illustrative)
├── navbar.html / .css / .js   # Shared navbar (injected via fetch)
├── footer.html / .css         # Shared footer (injected via fetch)
├── home.html assets...        # Home styles/scripts (home.css, home.js)
├── src/styles/tailwind.css    # Tailwind entry (@tailwind directives)
├── dist/                      # Built CSS/JS output
├── tailwind.config.js         # Tailwind theme & content config
├── postcss.config.js          # PostCSS pipeline
└── *.png / *.jpg              # Images (logos, icons, instruments, people)
```

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

> Code is MIT-licensed; images, logos, and personal photos are for demonstration only
> and remain the property of their respective owners.

## 👤 Author

**Lavesh Paryani**
- GitHub: [@laveshparyani](https://github.com/laveshparyani)

---

<div align="center">
<sub>Built as a front-end portfolio / assignment project.</sub>
</div>
