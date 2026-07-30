# Engineering Playbook

This document is the canonical guide for how Claude should perform engineering work in this repository. All implementation tasks should follow this guidance automatically unless explicitly overridden.

---

## 1. Core Principles

- Keep implementation tasks narrowly scoped.
- Solve only the requested problem.
- Do not redesign, refactor, or modernize unrelated code unless explicitly requested.
- Favor small, reviewable pull requests.
- Preserve existing architecture and design patterns whenever practical.

---

## 2. Repository Safety

- Always fetch the latest `origin/main` before beginning work.
- Always create new branches from the latest `origin/main`, never from local `HEAD`.
- Verify that the new branch's base commit matches the current `origin/main` before making code changes.
- Never begin implementation work from a stale local branch.

**Standard branch creation procedure:**

```bash
# Get the current origin/main SHA
git ls-remote origin HEAD

# Fetch it into the local repo
git fetch origin HEAD

# Use FETCH_HEAD as the parent for all new commits — never local HEAD
```

---

## 3. Regression Prevention

Before considering any task complete, verify:

- The requested functionality works as specified.
- The homepage still renders correctly.
- The global navigation renders correctly.
- The global footer renders correctly.
- Responsive/mobile layouts are unaffected where relevant.

Treat regressions on unrelated pages as build failures, even if the requested feature works correctly.

---

## 4. Scope Discipline

Unless explicitly requested, do not:

- Rename files.
- Reorganize directories.
- Reformat unrelated files.
- Introduce new dependencies.
- Update packages.
- Perform opportunistic cleanup.
- Change copy outside the requested scope.

---

## 5. Implementation Standards

- Reuse existing components whenever practical.
- Follow existing project conventions for file structure, naming, and style.
- Keep solutions simple and maintainable.
- Minimize code churn.
- Prefer consistency over cleverness.

---

## 6. Pull Request Expectations

Each PR should include:

- A concise summary of what changed and why.
- A list of files changed.
- Any assumptions made during implementation.
- Confirmation that no unrelated functionality was modified.
- A link to the Netlify preview deployment where available.

---

## 7. Decision Framework

When making implementation decisions, prioritize in this order:

1. **Correctness** — does it do what was asked?
2. **Safety** — does it avoid breaking anything else?
3. **Minimal scope** — is this the smallest change that solves the problem?
4. **Maintainability** — will this be easy to understand and change later?
5. **Consistency** — does it match the existing codebase?

Do not optimize for elegance at the expense of introducing unnecessary change.
