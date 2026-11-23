# Diana Qasemian — Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow at [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) that automatically builds and deploys the site on pushes to `main` (and via manual **Run workflow** dispatch).

To enable it on GitHub:

1. Push this directory as the root of your GitHub repository with a `main` branch.
2. Open your repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. The workflow will configure the repository's base path automatically (`VITE_BASE_PATH`) and publish `dist/`.
