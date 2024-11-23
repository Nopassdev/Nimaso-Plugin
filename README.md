# Nimaso Form Plugin

This template provides a foundation for developing with Remix, React, and TypeScript using Vite as the build tool.

## Prerequisites

Please install the following required technologies:

- [PNPM](https://pnpm.io/) _(package manager)_
- Node >=18.0.0
- [Docker](https://www.docker.com/) _(for deployment)_

## Steps to get started

1. Install dependencies: `pnpm install`
2. Set up your database: `pnpm migrate`
3. Start development server: `pnpm dev`

## Steps to deploy

1. Fetch the latest updates: `git fetch --all`
2. Build the project: `pnpm build`

## Project Structure

The project follows a standard Remix structure with the following key directories:

- `app/`: Main application code
  - `components/`: React components
  - `routes/`: Route components and API endpoints
  - `styles/`: Global styles and Tailwind configuration
  - `utils/`: Shared utilities and helpers
- `prisma/`: Database schema and migrations
- `public/`: Static assets

## Main technologies

- [Remix](https://remix.run/)
- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/) (Database ORM)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Email](https://react.email/)
- [Zod](https://zod.dev/) (Schema validation)

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [TypeScript and JavaScript](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Development Guidelines

1. Use TypeScript for all new code
2. Follow the existing code structure and naming conventions
3. Write tests for critical functionality
4. Use Prettier and ESLint for code formatting
5. Follow the commit message conventions

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm typecheck` - Run type checking
- `pnpm migrate` - Update database schema
- `pnpm seed` - Seed database with initial data
- `pnpm format` - Format code with Prettier
