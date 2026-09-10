---
name: code-push-and-comment
description: 'Push repository code to GitHub and report the result. Use when the user asks to push code, fix a Git remote, publish a branch, configure GitHub, or add a post-push completion comment.'
argument-hint: '[branch or remote, optional]'
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
4. Never discard user changes. Do not create a commit unless the user asked for one or the repository already requires it for the requested push.
5. Push the requested branch with `git push --set-upstream <remote> <branch>`.
6. If the push is rejected, inspect the exact server error and fix only the relevant cause. Do not force-push unless the user explicitly approves history rewriting; Git LFS migration is an exception when GitHub rejects an existing oversized blob and the remote branch has not been published.
7. Verify the result with `git status --short --branch`, `git remote -v`, and the relevant Git LFS listing when LFS is used.

## Completion Comment

After a successful push, provide this concise comment in the response:

> Code pushed successfully to `<remote>/<branch>`.
> Remote: `<repository-url>`
> Commit: `<short-commit>`
> Verification: working tree clean and branch synchronized.

If the push fails, provide the exact blocking reason and the next required user action instead of claiming success.

## Safety Rules

- Never print credentials or secrets.
- Never use `git reset --hard`, `git checkout --`, or an unapproved force-push.
- Preserve unrelated worktree changes.
- Keep the user's existing remote and branch names unless the request specifies a change.
