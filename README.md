# vscode-project-refs

This repo exposes a current issue in vscode where the `tsconfig.json` in the project is not what is used by vscode. In particular, this is related to vscode not honoring the project references in the `tsconfig.json`.

## Structure

This repo contains two files that are meant to be compiled in separate contexts. There are globals that should only be available for `src/foo.ts` (defined in `types/foo.d.ts`) and there are globals that should only be available for `src/bar.ts` (defined in `types/bar.d.ts`). This separation is achieved by using two distinct `tsconfig.json` files: `tsconfig.foo.json` and `tsconfig.bar.json`. These two configs are referenced by `tsconfig.json` as project references, allowing both "projects" to be built at once.

## Building

To build this project, run `tsc --build` (the flag forces project references to rebuild). If you want to see that these projects are building successfully, uncomment the lines in either file and see the errors that result.

## Replicating Implicit Behavior

When editing in vscode, there are other false positives that show up. To see those in more detail on the command line, build this project with `tsc -p tsconfig.implicit.json`. Declarations that should be built separate are colliding now that they are in the same context.
