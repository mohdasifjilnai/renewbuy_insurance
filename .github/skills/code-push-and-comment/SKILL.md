---
name: code-push-and-comment
description: 'Push repository code to GitHub and report the result. Use when the user asks to push code, fix a Git remote, publish a branch, configure GitHub, or add a post-push completion comment.'
argument-hint: '[source branch and PR base branch, optional]'
user-invocable: true
disable-model-invocation: false
---

# Code Push And Comment

Use this workflow for GitHub publishing requests in this repository.

## Procedure

1. Inspect the repository before changing anything:
   - Run `git status --short --branch`.
   - Run `git remote -v`.
   - Identify the current branch with `git branch --show-current`.
2. Confirm the intended GitHub remote from the user's request. Do not expose or request passwords, tokens, or private keys in chat.
3. Check for large tracked files before pushing. If a file is at least 100 MB, use Git LFS. Existing oversized blobs must be migrated from the branch history; tracking only a new copy is insufficient.
4. Never discard user changes. When the user explicitly invokes `code-push-and-comment`, commit the relevant pending project changes before pushing. Use a concise descriptive commit message if none is provided. Do not stage unrelated files or create a commit when the user only asks for inspection or explicitly says not to commit.
5. Determine the delivery path:
   - If the source branch is `main`, push it directly to `main`.
   - If the source branch is another branch, push it as the source branch and open a GitHub Pull Request. GitHub calls this a Pull Request; do not call it an MR in the completion comment.
   - Use an explicitly requested PR base branch first. Otherwise use the source branch's configured upstream/base branch when it is clearly available. If no base can be determined, use `main` and state that assumption.
   - If the source branch was cut from another feature branch but Git metadata does not identify that branch, ask the user for the intended PR base instead of guessing when the target matters.
6. Push the requested branch with `git push --set-upstream <remote> <source-branch>`.
7. For a non-`main` branch, create the PR with `gh pr create --base <base-branch> --head <source-branch>` when GitHub CLI is installed and authenticated. Never create a PR without a successful push. If `gh` is unavailable, report the GitHub compare URL and the exact base/head branches needed.
8. If the push or PR creation is rejected, inspect the exact server error and fix only the relevant cause. Do not force-push unless the user explicitly approves history rewriting; Git LFS migration is an exception when GitHub rejects an existing oversized blob and the remote branch has not been published.
9. Verify the result with `git status --short --branch`, `git remote -v`, and the relevant Git LFS listing when LFS is used.

## Completion Comment

After a successful push, provide this concise comment in the response:

> Code pushed successfully to `<remote>/<branch>`.
> Remote: `<repository-url>`
> Commit: `<short-commit>`
> Verification: working tree clean and branch synchronized.

For a non-`main` source branch, use this instead:

> Code pushed successfully to `<remote>/<source-branch>`.
> Pull Request: `<pr-url>` (base: `<base-branch>`)
> Remote: `<repository-url>`
> Commit: `<short-commit>`
> Verification: working tree clean and source branch synchronized.

If the push fails, provide the exact blocking reason and the next required user action instead of claiming success.

## Safety Rules

- Never print credentials or secrets.
- Never use `git reset --hard`, `git checkout --`, or an unapproved force-push.
- Preserve unrelated worktree changes.
- Keep the user's existing remote and branch names unless the request specifies a change.
