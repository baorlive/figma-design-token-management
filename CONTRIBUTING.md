# Contributing

Review [LICENSE](LICENSE) before using or redistributing this personal-use project. Keep changes focused and explain the user problem, design decision, and resulting behavior.

## Local workflow

Use Node.js 22+ and the built-in Node tooling; the plugin itself needs no bundler or runtime dependencies.

```sh
npm ci --ignore-scripts
npm run check
```

Edit UI logic in `ui.html`, then run `npm run sync:ui` to regenerate `ui.js`. Do not edit the mirror independently. Add focused behavioral regressions for controller fixes. Read [AGENTS.md](AGENTS.md) for architecture and token constraints.

## Quality gates (QGs)

This table defines the review requirements; executable commands live in [package.json](package.json) and [the CI workflow](.github/workflows/quality.yml).

| Gate | When | Required evidence |
| --- | --- | --- |
| Automated integrity | Every change | `npm run check` passes: controller/mirror/inline syntax, exact UI sync, manifest entries, duplicate IDs, literal DOM references, local Markdown links, and controller tests |
| Product and Figma QA | Behavior or UI changes | Relevant [QA checklist](docs/QA.md) completed in a disposable Figma file; record results and unverified items |
| Visual review | Visible UI changes | Same-size before/after screenshots, design rationale, and keyboard/focus checks against [UI guidance](docs/UI.md) |
| Release readiness | Before releasing | Automated checks and applicable manual QA pass; review the diff, known limitations, license, and sanitized release contents |

The static checks do not validate layout or accessibility. Controller tests simulate Figma APIs and do not establish live API compatibility. Documentation-only changes require the automated gate and link/content review; Figma checks are not needed unless the documented behavior needs verification.

## GitHub enforcement

CI runs the automated gate on Node.js 22 and 24 for pushes and pull requests, plus `git diff --check`. After the first remote run, configure the default-branch ruleset to require a PR and both `Check (Node 22)` and `Check (Node 24)` statuses, confirming the displayed names. A workflow file alone does not enable branch protection. Manual gates require reviewer evidence; they are not automatically enforced by CI.

Use [the PR template](.github/pull_request_template.md) to record results. Claim only checks actually observed; do not equate a local pass with a remote CI pass.

## Commit hygiene

Use one logical change per commit with a short imperative subject. Inspect the diff and exclude OS files, credentials, dependencies, and private design exports. Squash intermediate PR commits when they add no useful review context.

Preserve published history. A rewrite needs a specific scope, backup reference, and coordination with collaborators. For a source download without `.git`, apply changes to an existing clone when available instead of replacing its history.

Review agent-generated changes as carefully as other contributions. Do not invent user research, performance improvements, or test results.
