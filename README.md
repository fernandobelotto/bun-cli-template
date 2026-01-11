# bun-cli-template

A modern CLI template built with Bun, TypeScript, and Commander.js.

## Features

- **Bun Runtime** - Fast JavaScript runtime with built-in bundler and test runner
- **TypeScript** - Full type safety with TypeScript 5.9 + native preview (tsgo) for 10x faster type checking
- **Commander.js** - Powerful CLI argument parsing
- **@inquirer/prompts** - Modern interactive command-line prompts
- **Chalk** - Terminal string styling
- **ESLint 9** - Flat config format with TypeScript support
- **Husky + lint-staged** - Pre-commit hooks for code quality
- **Semantic Release** - Automated versioning and changelog generation
- **GitHub Actions** - CI/CD pipeline for releases

## Requirements

- Bun >= 1.1.0

## Installation

```bash
bun install
```

## Usage

### Development

```bash
# Run in development mode with hot reload
bun dev

# Run type checking
bun run typecheck

# Run type checking with TypeScript 7 native (faster for large codebases)
bun run typecheck:fast

# Run linting
bun run lint

# Run tests
bun test
```

### Building

```bash
# Build for production
bun run build

# Build with watch mode
bun run build:watch

# Build standalone executable
bun run build:executable
```

### Running

```bash
# Run the CLI directly
bun src/index.ts

# Run the built version
bun start
```

## Project Structure

```
bun-cli-template/
├── src/
│   ├── index.ts          # Entry point
│   ├── cli/
│   │   ├── index.ts      # CLI implementation
│   │   └── index.test.ts # CLI tests
│   └── utils/
│       ├── example.ts    # Utility functions
│       └── example.test.ts
├── .husky/               # Git hooks
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── .releaserc.json
```

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Runtime | Bun | >= 1.1.0 |
| Language | TypeScript | 5.9.x + 7.0 native preview |
| CLI | Commander.js | 14.x |
| Prompts | @inquirer/prompts | 8.x |
| Styling | Chalk | 5.x |
| Linting | ESLint | 9.x |
| Releases | semantic-release | 25.x |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache License, Version 2.0.

See the [LICENSE](LICENSE) file for the full license text.

## Versioning and Release Process

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) to automate version management and package publishing. The release process is triggered on every push to the `main` branch and follows the Angular Commit Message Convention.

### Commit Message Convention

We follow the [Angular Commit Message Convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format). Example:

```
feat(cli): add new option for output format
fix(core): handle empty files gracefully
```

Breaking changes should include `BREAKING CHANGE:` in the commit body or a `!` after the type/scope.

### Manual Release

To trigger a release manually:

1. Ensure you're on the main branch
2. Run:
```bash
bunx semantic-release
```

See `.releaserc.json` for configuration details.
