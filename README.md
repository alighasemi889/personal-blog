# Personal Blog — Ali Ghasemi

A modern, fully responsive personal blog MVP built with React, Vite, and Tailwind CSS.

## Features

- **Light & Dark Mode** — toggle in the navbar, persisted to localStorage, respects system preference
- **Articles** — responsive grid with category filtering, full article pages with related posts
- **Podcasts** — cards with native HTML5 audio players
- **About** — profile, skills, and social links
- **Responsive** — 1 column on mobile, 2 on tablet, 3 on desktop
- **No backend** — all content comes from mock data files in `src/data/`
- **No UI libraries** — only React, Tailwind CSS, and native HTML elements
- **Inline SVG icons** — no icon packages installed

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- React Router 6

## Project Structure

```
src/
  components/    Reusable UI components
  pages/         Route-level page components
  data/          Mock data (articles.js, podcasts.js)
  hooks/         Custom hooks (useTheme)
  utils/         Utility functions
  App.jsx        Root component with routing
  main.tsx       Entry point
```

## Adding Content

To publish a new article, add an object to the array in `src/data/articles.js`.
To publish a new podcast, add an object to the array in `src/data/podcasts.js`.

## License

MIT
