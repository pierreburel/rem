# rem [![CI](https://github.com/pierreburel/rem/actions/workflows/ci.yml/badge.svg)](https://github.com/pierreburel/rem/actions/workflows/ci.yml)

Monorepo for rem/em unit conversion tools.

## Packages

| Package | Description | npm |
|---------|-------------|-----|
| [@pierreburel/sass-rem](packages/sass-rem/) | Sass function and mixin to use rem units with optional pixel fallback | [![npm](https://img.shields.io/npm/v/@pierreburel/sass-rem)](https://www.npmjs.com/package/@pierreburel/sass-rem) |
| [@pierreburel/sass-em](packages/sass-em/) | Sass function and mixin to convert px to em | [![npm](https://img.shields.io/npm/v/@pierreburel/sass-em)](https://www.npmjs.com/package/@pierreburel/sass-em) |
| [@pierreburel/postcss-rem](packages/postcss-rem/) | PostCSS plugin to use rem units with optional pixel fallback | [![npm](https://img.shields.io/npm/v/@pierreburel/postcss-rem)](https://www.npmjs.com/package/@pierreburel/postcss-rem) |
| [@pierreburel/rem](packages/rem/) | JavaScript function to convert CSS rem units | [![npm](https://img.shields.io/npm/v/@pierreburel/rem)](https://www.npmjs.com/package/@pierreburel/rem) |

## Migrating from old package names

The packages were previously published as `sass-rem`, `sass-em`, `postcss-rem`, and `startijenn-rem`. Those names are deprecated but still work as redirects to the scoped packages.

| Old name | New name |
|----------|----------|
| `sass-rem` | `@pierreburel/sass-rem` |
| `sass-em` | `@pierreburel/sass-em` |
| `postcss-rem` | `@pierreburel/postcss-rem` |
| `startijenn-rem` | `@pierreburel/rem` |

## Development

```bash
npm install
npm test              # run all tests
npm test --workspace=packages/sass-rem  # run one package
```

## Releasing

```bash
./scripts/release.sh <package> <patch|minor|major>
# Example:
./scripts/release.sh rem patch
```

## License

MIT
