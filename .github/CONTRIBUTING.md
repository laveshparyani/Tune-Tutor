# Contributing to Tune Tutor

Thanks for your interest in improving Tune Tutor! This is a front-end
portfolio/demo project, but contributions and suggestions are welcome.

## Ways to contribute

- Report a bug or a broken link by opening an [issue](https://github.com/laveshparyani/Tune-Tutor/issues).
- Suggest an improvement (design, accessibility, performance) via an issue.
- Submit a pull request for a fix or enhancement.

## Development setup

```bash
git clone https://github.com/laveshparyani/Tune-Tutor.git
cd Tune-Tutor
npm install
npm run build   # or: npm run watch
```

Serve the site over HTTP (the shared navbar/footer are loaded with `fetch()`):

```bash
npx serve .
```

## Pull request guidelines

1. Create a feature branch from `main` (for example `fix/broken-link`).
2. Keep changes focused and small where possible.
3. Make sure `npm run build` succeeds before opening the PR (CI will also check this).
4. Describe what changed and why in the PR description.
5. Link any related issue.

## Code style

- Keep HTML semantic and accessible (use `alt` text, labels, headings in order).
- Prefer Tailwind utility classes and the existing design tokens where practical.
- Match the formatting of the surrounding code.

## Reporting security issues

Please do not open public issues for security problems. See [SECURITY.md](SECURITY.md).
