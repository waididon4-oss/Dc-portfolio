# DC Portfolio

A premium, black-and-white personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- React Router v6

## Pages

- **Home** — hero introduction, capability snapshot, featured projects, call to action
- **About** — bio, philosophy, career timeline
- **Skills** — animated circular progress rings grouped by category, plus a toolkit list
- **Projects** — filterable project showcase grid
- **Contact** — contact details, social links, and a validated contact form

## Getting Started

### 1. Install Node.js

You need Node.js 18 or newer. Check with:

```bash
node -v
```

### 2. Install dependencies

From inside the `dc-portfolio` folder:

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

This opens the site at `http://localhost:5173`. It hot-reloads as you edit files.

### 4. Build for production

```bash
npm run build
```

This outputs a production-ready build to the `dist` folder. Preview it locally with:

```bash
npm run preview
```

## Folder Structure

```
dc-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/      Shared, reusable UI pieces (Navbar, Footer, Button, etc.)
│   ├── context/          ThemeContext for dark/light mode
│   ├── data/              Content arrays (skills, projects, social links)
│   ├── pages/            One file per route (Home, About, Skills, Projects, Contact, NotFound)
│   ├── sections/          Larger page sections (currently the Home page Hero)
│   ├── App.jsx            Route definitions and page transitions
│   ├── main.jsx           App entry point
│   └── index.css          Tailwind directives and global styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Personalizing the Site

A few things are intentionally left for you to fill in with your own details:

1. **Your CV** — the "Download CV" button on the Home page links to `/resume.pdf`. Add your actual CV file at `public/resume.pdf` (the filename must match exactly).
2. **Your photo** — the About page and Home page currently use a circular "DC" monogram in place of a portrait. To use a real photo, drop an image into `public/` (e.g. `public/portrait.jpg`) and replace the placeholder `<div>` in `src/pages/About.jsx` and `src/pages/Home.jsx` with an `<img>` tag pointing to it.
3. **Contact details and social links** — edit `src/data/social.js` and the `contactDetails` array at the top of `src/pages/Contact.jsx`.
4. **Projects and skills** — edit `src/data/projects.js` and `src/data/skills.js` to reflect your real work and skill levels.
5. **Contact form submission** — the form in `src/components/ContactForm.jsx` currently simulates a network request. To actually receive messages, connect it to a service like Formspree or EmailJS, or your own backend endpoint, inside the `handleSubmit` function (the spot is clearly marked with a comment).

## Theming

Dark mode is the default. The toggle in the navbar switches a `dark` class on `<html>` and persists the choice in `localStorage`. All colors are defined as design tokens in `tailwind.config.js` under `ink` (dark backgrounds), `ivory` (light backgrounds), and `white` (the accent scale), so you can retune the palette from one place.

## Accessibility Notes

- Skip-to-content link for keyboard users
- Visible white focus rings on all interactive elements
- Reduced motion is respected via `prefers-reduced-motion`
- Form fields have associated labels and `aria-describedby` error messages
- Icon-only buttons (theme toggle, mobile menu, social links) have `aria-label`s
