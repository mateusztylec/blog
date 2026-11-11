[mateusztylec.com](https://mateusztylec.com) blog

## Development

```bash
bun install
bun run dev
bun run check       # oxfmt + oxlint --type-aware
bun run typecheck   # tsc
bun test            # custom oxlint rules in tools/oxlint-plugin
bun run build       # static export to out/
```

Lint rules live in `.oxlintrc.json` (custom rules in `tools/oxlint-plugin`), formatting in `.oxfmtrc.json`.
Named exports only (Next.js route files are the exception), kebab-case filenames, `import type` for types,
no `any`, no non-null `!`, no barrel files. tsconfig is strict with `noUncheckedIndexedAccess`.
