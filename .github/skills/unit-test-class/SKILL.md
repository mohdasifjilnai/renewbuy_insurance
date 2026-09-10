---
name: unit-test-class
description: 'Create or improve Angular Jasmine/Karma unit tests for one particular class. Use when the user asks for test cases for a component, service, directive, guard, pipe, or other TypeScript class, especially when each class needs one describe block, one test per method behavior, and mocks only when required.'
argument-hint: '[class name or file path]'
user-invocable: true
disable-model-invocation: false
---

# Unit Test Class

Create focused Angular unit tests for exactly one target class at a time.

## Procedure

1. Identify the target class and its existing `.spec.ts` file. If the user gives only a class name, locate its TypeScript definition and nearby spec.
2. Read the target class, constructor dependencies, public methods, inputs/outputs, lifecycle hooks, and existing tests before editing.
3. Follow this repository's test stack:
   - Jasmine and Karma.
   - Angular `TestBed` for Angular classes and dependency injection.
   - Standalone components in `imports` when the target is standalone.
   - `providers` and `jasmine.createSpyObj` for injected dependencies only when the class actually uses them.
4. Keep one top-level `describe('<ClassName>', () => { ... })` block for the target class. Do not create separate top-level `describe` blocks for individual methods.
5. Add one `it` test for each meaningful method behavior, not merely one test for every line or private helper. Include the normal path and important boundary/error behavior when it is observable.
6. Keep the test names behavior-focused, for example `should calculate BMI for valid height and weight` or `should show an error when the API request fails`.
7. Create mock data only when the target class needs it. Keep mock values minimal, typed, local to the spec, and representative of the behavior under test.
8. Mock external dependencies at the class boundary:
   - Use `jasmine.createSpyObj` for services.
   - Return `of(...)` for successful Observable responses.
   - Return `throwError(() => error)` for Observable failures.
   - Use `HttpClientTestingModule` or the repository's current Angular HTTP testing approach when testing HTTP behavior.
   - Do not mock the method under test or implementation details that are not part of the class contract.
9. Reset mutable state in `beforeEach`. Avoid shared mock data mutation between tests.
10. Preserve existing useful tests and project style. Do not add unrelated refactors or tests for unrelated classes.
11. Run the narrowest available test first. For this project, use `ng test --watch=false --include "src/path/to/class.spec.ts"` when supported. If the browser runner is unavailable, report that limitation and still run TypeScript/build validation when possible.
12. Fix only failures caused by the new or changed test, then rerun the same focused command.

## Required Spec Shape

Use this structure unless the target class requires a more specific Angular setup:

```ts
import { TestBed } from '@angular/core/testing';

import { TargetClass } from './target-class';

describe('TargetClass', () => {
  let target: TargetClass;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TargetClass]
    });

    target = TestBed.inject(TargetClass);
  });

  it('should create', () => {
    expect(target).toBeTruthy();
  });

  it('should perform the expected behavior for the method', () => {
    // Arrange, act, assert.
  });
});
```

For a component, use `ComponentFixture`, `TestBed.createComponent`, `fixture.detectChanges()`, and import the standalone component or declare the non-standalone component according to the target file.

## Completion Report

After creating or updating tests, report:

- Target class and spec file.
- Behaviors covered.
- Mocks or test data added, if any.
- Focused test command and result.
- Any remaining test-runner or environment limitation.

Never claim tests pass unless the focused command completed successfully.

## Safety Rules

- Do not modify production code just to make a test pass unless the user explicitly asks for a bug fix.
- Do not weaken assertions to hide failures.
- Do not use `any` when a small typed test fixture or spy type is practical.
- Do not add empty tests or duplicate `should create` tests.
- Keep one target class and one top-level `describe` per spec request.
