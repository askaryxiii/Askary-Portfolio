# Ahmed Khaled Al-Askary - Portfolio

A Visual Studio Code-inspired portfolio built with Next.js, React, JavaScript, and CSS Modules.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Portfolio content lives in `portfolio.config.js`. It contains:

- Profile and SEO metadata
- Contact and social links
- Work experience and education
- Skills shown in the Extensions view
- Featured projects
- Application routes

The GitHub page uses the username configured in `socials`. You can optionally add `GITHUB_API_KEY` to `.env.local` to increase the GitHub API rate limit.

To add a page, create `app/<route>/page.jsx` and add its navigation entry to `routes` in `portfolio.config.js`.

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```
