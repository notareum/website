# Notareum Website

This is the marketing site for Notareum, built with Next.js and exported as a static site for cPanel FTP deployment.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app source lives in `src/app` and `src/components`.

## Production Build

The project builds as a static export so it can be uploaded directly to cPanel over FTP.

```bash
npm run build
```

The generated site is written to `out/`.

## GitHub Actions Deployment

The repository includes a workflow at `.github/workflows/deploy-cpanel.yml` that builds the site and uploads `out/` to cPanel whenever code is pushed to `prod/deploy`.

Configure these GitHub repository secrets before enabling the workflow:

- `CPANEL_FTP_SERVER`: FTP hostname for your cPanel account.
- `CPANEL_FTP_USERNAME`: FTP username.
- `CPANEL_FTP_PASSWORD`: FTP password.

Optional GitHub repository variable:

- `CPANEL_FTP_SERVER_DIR`: Remote destination directory. Defaults to `/public_html/`.

If your cPanel host requires a different branch or directory, update `.github/workflows/deploy-cpanel.yml` accordingly.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) - Next.js static export deployment details.
