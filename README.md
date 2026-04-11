<div align="center">

# Notareum

**The Trust Layer for Web3**

Official marketing website for the Notareum protocol: an open standard for sharing blockchain resources safely with cryptographic verification across every chain.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red)]()

[Live Site](https://notareum.com) · [Whitepaper](https://notareum.com/whitepaper/) · [Protocol](https://notareum.com/protocol/)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository contains the source code for [notareum.com](https://notareum.com), the public-facing website for the Notareum protocol. The site communicates the protocol's architecture, developer SDK, ecosystem, tokenomics, use cases, and .nota file format to builders, partners, and the broader Web3 community.

### Key Pages

| Route           | Description                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| `/`           | Landing page with hero, architecture, challenges, process, SDK, ecosystem, use cases, token, and CTA sections |
| `/protocol`   | Protocol architecture deep-dive                                                                               |
| `/developers` | Developer SDK documentation & resources                                                                       |
| `/ecosystem`  | Ecosystem partners & integrations                                                                             |
| `/token`      | NOTA token utility & distribution                                                                             |
| `/whitepaper` | Whitepaper viewer                                                                                             |
| `/about`      | About Notareum Labs                                                                                           |

## Tech Stack

| Technology               | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| **Next.js 14**     | React framework (App Router, static export) |
| **TypeScript 5**   | Type-safe development                       |
| **Tailwind CSS 3** | Utility-first styling                       |
| **next-themes**    | Dark / light mode support                   |
| **Inter**          | Primary typeface via `next/font`          |
| **ESLint**         | Code quality & consistency                  |

## Project Structure

```
├── .github/workflows/     # CI/CD pipeline (cPanel FTP deploy)
├── docs/                  # Project documentation & goals
├── public/                # Static assets, robots.txt, manifest
├── src/
│   ├── app/               # Next.js App Router pages & layouts
│   │   ├── layout.tsx     # Root layout (metadata, fonts, theme)
│   │   ├── page.tsx       # Home page composition
│   │   ├── globals.css    # Global styles & CSS custom properties
│   │   ├── sitemap.ts     # Dynamic sitemap generation
│   │   └── */page.tsx     # Route-specific pages
│   └── components/        # Shared UI components
├── tailwind.config.ts     # Theme tokens (brand, surface, accent)
├── next.config.js         # Static export & image config
└── package.json
```

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/notareum/website.git
cd website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages auto-refresh on save.

## Scripts

| Command           | Description                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`   | Start the development server                    |
| `npm run build` | Generate a production static export to `out/` |
| `npm run start` | Serve the production build locally              |
| `npm run lint`  | Run ESLint across the codebase                  |

## Deployment

The site is built as a **static export** (`output: 'export'` in `next.config.js`), producing a fully static `out/` directory that can be uploaded to any hosting provider.

### Automated — GitHub Actions → cPanel FTP

A workflow at `.github/workflows/deploy-prod.yml` automatically builds and deploys the site whenever code is pushed to the `prod/deploy` branch.

**Required GitHub Secrets:**

| Secret           | Description                            |
| ---------------- | -------------------------------------- |
| `FTP_SERVER`   | FTP hostname for your deployer account |
| `FTP_USERNAME` | FTP username                           |
| `FTP_PASSWORD` | FTP password                           |

**Optional GitHub Variable:**

| Variable           | Description                  | Default           |
| ------------------ | ---------------------------- | ----------------- |
| `FTP_SERVER_DIR` | Remote destination directory | `/public_html/` |

### Manual

```bash
npm run build
# Upload the contents of out/ to your hosting provider
```

## Contributing

1. Create a feature branch from `master`.
2. Follow [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages.
3. Keep commits atomic — one logical change per commit.
4. Run `npm run lint` before opening a pull request.
5. Open a PR against `master` for review.

## License

This project is **private** and proprietary to Notareum Labs. All rights reserved.
