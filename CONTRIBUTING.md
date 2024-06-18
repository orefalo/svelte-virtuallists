# Developer notes

Want to contribute?
You will find in this document all the details to get quickly up to speed.

## Conventions and Standards

1. Typing code enables easier future modifications.
2. Remember to document the code and manuals.
3. Add a use case in the demosite for each new feature.

## First Install

1. if you don't already use `pnpm` install it via `npm install -g pnpm`, version 9 is required.
2. `pnpm i` - Installs all the dependencies
3. `pnpm sync` - Running this command creates .svelte-kit/tsconfig.json, and should fix code resolutions in the IDE

## Developing

- run `pnpm dev`

### Code formatting

- run `pnpm lint`

All rules and scopes are already preset.  
Note that formatting is checked by the CICD pipeline and may break release.

### Building

building in sveltekit is used for 3 use cases

1. code correctness - use `pnpm build`& `pnpm check`
2. packaging - use `pnpm package` and go check the `/package` folder outputs
3. generating the demo side, in `/docs`

packaging is done automatically via the CICD pipeline

### Commiting changes

- run `pnpm commit`

Commits are accepted, as long as they comply to the _commit message format_ described further below.

### Testing

use `pnpm test`

I must admit tests are very light at this point

## Bundleling, CICD & release to NPM

The following actions are automated using github actions.

- The changelog is automatically generated from the commit descriptions
- The increment of the semantic version number upon a fix or new feature
- The generation of a Pull Request upon a minor/major change
- The publishing of the new package to NPM upon PR approval

### Demo site (GH Pages)

- To build the prod ready docs, use `pnpm build` and `pnpm preview`.
- GH Pages hold the demo site. The CICD pipeline ensure the site in is sync upon every push to `master`.
- The demo site uses a few custom built vite-plugins to ease authoring.
- A custom vite plugin is used to calculate an estimate of the bundle size.
- Please note that the bundle size is not just javascript. It also holds .d.types, css, .json ...etc

### Releasing a new version to NPM

Please follow these steps

1. run `pnpm i` to ensure `pnpm-lock.yaml` is up to date
2. run `pnpm lint` to ensure formatting & linting passes
3. run `pnpm check` to do further svelte specific validations
4. run `pnpm test` to ensure tests pass
5. commit your changes either as a fix or feature, the github action will automatically create a PR
6. Ensure that all github actions complete and are GREEN
7. Approve PR, package will be deployed to NPM.

if the above doesn't work, the annexe has step to deploy to npm manually

# Annexes

## Folder Structure

- **/package/** - GENERATED folder used for package release
- **/docs/** - GENERATED static site, used by github actions to publish gh-pages
- **/src/lib/** - core component
- **/src/** - demo site
- **/scripts/** - contains build helpers and demo site vite plugins
- **/static/** - all the static contents like icons and screenshots

### Configuration files

_github actions - CICD pipeline_

- **.github/** - holds all the actions run during code push

_prettier - code formatter_

- **.prettierrc**
- **.prettierignore**

_eslint - code linter, finds errors_

- **eslint.config.js**

_commit-zen/commitlint/husky - neat commit messages used to generate the changelog_

- **.commitlintrc.cjs**
- **.cz-config.cjs**
- **package.json** (section config)
- **.husky**

_vite,sveltekit & typescript - a great frontend framework_

- **vite.config.js** - vite bundler preferences
- **svelte.config.js** - svelte preferences
- **tsconfig.json** - typescript preferences
- **.svelte-kit/** - GENERATED internal

_git - source control software_

- **.gitattributes** - default file attributes for files put under source control
- **.gitignore** - files the source control should ignore
- **.git/** - internal to git

_visual studio code - a great IDE_

- **.vscode/** - contains the IDE preferences

_PNPM - a great package manager_

- **package.json** - definition of the project and dependencies
- **pnpm-lock.yaml** - snapshot of deps versions, used by the build process
- **node_modules** - GENERATED contrains all the dependencies

## Most important PNPM Commands

- **dev** - start the server in dev mode with hot reload
- **build** - compiles the code only - mainly used to ensure no errors are left
- **package** - generates and optimizes the release in the `package` folder
- **lint** - formats and lints the code base
- **commit** - use to commit code into the source control, provides a neat wizard to draft commit messages

## Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header is _mandatory_ and has a special format that includes a **type**, a **subject** and an optional **scope** :

```
type(scope?)!?: subject
body?
footer?
```

Any line of the commit message cannot be longer than 100 characters. This allows the message to be easy to read on GitHub and various other git tools.

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: npm)
- **ci**: Changes to the CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature, increments X.9.X
- **fix**: A bug fix, increments X.X.9
- **wip**: To mark a work in progress
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.)
- **test**: Adding missing tests or correcting existing tests
- **revert:** for a revert commit

adding a tailing **'!'** marks the commit as a **BREAKING CHANGE** - and will affect version numbering.

#### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

## Publishing a new release manually

The source code releasing cycle works by the automated bot [Release Please](https://github.com/googleapis/release-please).

Every time a new important commit is merged to master, this bot will create/update a PR for a new version proposal, containing an updated `CHANGELOG.md` file and an increased version number for the next release.

When a maintainer wish to publish a new release, he must perform the following tasks, **in this specific order**:

0. Merge all the relevant changes to master, and make sure that all Github actions checks passed and the auto-generated docs are fine.
1. Create a source code release, simply by merging the PR created by the Release Please bot. You have a chance right before the merging to modify the changelog: Modifying the PR body will change what will be displayed on the Github release page, and modifying the file changes to the `CHANGELOG.md` file of the PR let you change the automated changes to this file. **Important**: If you don't merge this release PR immediately after your manual modifications, your modifications will be lost by the next invocation of the Release Please action, which executes whenever committing to the master branch.
2. After the merging, wait until the Github Actions job named `release-please` is done. You should see now an auto-generated Github release on the main Github page, containing the compiled package with the source code (no need to download it manually).
3. Fetch the changes from **master** and publish to NPM the newly auto-generated release, by executing the following: (get the `NPM_OTP` from Google authenticator ):

```shell
$ pnpm login https://registry.npmjs.org/
$ git checkout master
$ git fetch
$ pnpm fetch-and-publish <NPM_OTP>
```

The purpose of this process is to streamline the release process, free from any human mistakes.

We run step 3 manually, and not automated on Github Actions, because we don't want to share NPM credentials as part of the Github project.

### More control about Release Please

#### Controling the version number and forcing a release PR

**Release Please** actions follows semantic versioning to generate the version number. If you want to change the version number of the new release, or that Release Please bot didn't generate a PR (because there is no _important_ change) and you want to force a new version, you may bump(or downgrade) the version by adding a new commit (replacing `VERSION` to a version number in the format of `X.Y.Z`):

```shell
git commit --allow-empty -m "chore: release VERSION (you may change the title)" -m "Release-As: VERSION"
```

Source: https://github.com/googleapis/release-please#how-do-i-change-the-version-number

#### Controlling contribution PR

You can specify additional messages in the PR body that will be included in the changelog (if relevant). An example to a body of PR containing additional messages:

```
feat: adds v4 UUID to crypto

This adds support for v4 UUIDs to the library.

fix(utils): unicode no longer throws exception
  PiperOrigin-RevId: 345559154
  BREAKING-CHANGE: encode method no longer throws.
  Source-Link: googleapis/googleapis@5e0dcb2

feat(utils): update encode to support unicode
  PiperOrigin-RevId: 345559182
  Source-Link: googleapis/googleapis@e5eef86
```

Source: https://github.com/googleapis/release-please#what-if-my-pr-contains-multiple-fixes-or-features

In the case that a contribution PR was already merged and you want to change the messages for release please, you can edit the body of the merged pull requests and add a section like:

```
BEGIN_COMMIT_OVERRIDE
feat: add ability to override merged commit message

fix: another message
chore: a third message
END_COMMIT_OVERRIDE
```

Source: https://github.com/googleapis/release-please#how-can-i-fix-release-notes

## GitHub Configured

### Code and Automation / Actions / General

- Workflow must have `R/W` permissions
- Check `Allow GitHub Actions to create and approve pull requests`

### Code and Automation / GH Pages

- Point it to branch `gh-pages`, folder `docs`

### Security / Secrets and variables / Actions / Respository secrets

- Define secret `NPM_TOKEN` with a finegrained RW access token from NPM, for security is should be restricted to repository.
