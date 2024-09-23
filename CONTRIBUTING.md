<h1 align="center">Development & Contribution Guidelines</h1>

Below are some guidelines to help with setting up a development environment and contributing to the project.

Please feel free to take inspiration from the principles and concepts that are present in the project.

Disclaimer: This is not a template, boilerplate or a framework.

## 🤔 Table of Contents:

- [🤔 Table of Contents:](#-table-of-contents)
- [🔍 Requirements](#-requirements)
- [💻 Development](#-development)
- [🔐 Issues](#-issues)
- [🧪 Pull Requests](#-pull-requests)
- [💬 Conventional Commits](#-conventional-commits)

## 🔍 Requirements

- [docker](https://docs.docker.com/engine/install/), recommended `>=27.x.x`
- [node](https://nodejs.org/en), recommended `>=22.x.x`
- [pnpm](https://pnpm.io/installation/), recommended `>=9.x.x`

## 💻 Development

To set up the project locally, please follow these steps:

1. Fork the repository.

2. Clone your forked repository:

```bash
git clone <your-forked-repository>
cd joycreative.io
```

3. Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

4. Install the dependencies:

```bash
pnpm install
```

5. Start the PostgreSQL container in headless mode:

```bash
docker compose up -d
```

6. Run the database migrations:

```bash
pnpm run db:migrate
```

7. Start the website in development mode:

```bash
pnpm dev
```

## 🔐 Issues

If you wish to report a bug, or have suggestions, feel free to [create an issue](https://github.com/kasparnau/joycreative.io/issues). Remember to include a clear and descriptive title, along with your message and potential reproduction steps.

## 🧪 Pull Requests

If you're working on some improvents or a bug fix, feel free to create a pull request by following these steps:

1. Fork the repository.
2. Create a new branch with a clear and descriptive name.
3. Make changes in accordance with our Prettier and Commitlint configuration.
4. Push your changes to your forked repository.
5. Open a pull request from your branch to our `main` branch.

## 💬 Conventional Commits

We follow the [Conventional Commits](https://conventionalcommits.org) specification for commit messages. This helps with maintaining a cohesive and explicit commit history.

All commit messages should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
