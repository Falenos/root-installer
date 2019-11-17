# Root installer

- [Root installer](#root-installer)
  - [Installation](#installation)
  - [Usage](#usage)
    - [As node script](#as-node-script)
    - [From the terminal](#from-the-terminal)
  - [Current Status](#current-status)
    - [Output](#output)
    - [Limitations](#limitations)
  - [Features to come](#features-to-come)
  - [Contributions](#contributions)
  - [License](#license)
  - [Support](#support)

## Installation

```bash
npm install root-installer
```

## Usage

You can use either a npm script or run the command from your terminal at your root directory

### As node script

```bash
"scripts": {
    "root-installer": "node node_modules/root-installer -d 'app storybook' -p 'react redux'"
}

Options:
  -d, --directories
  A list of the directories separated by `,`
  They operate as relative paths from the process.cwd().

  e.g. -d 'dir1 dir2 sites/dir2' for a file structure of
  ROOT
  |_package.json
  |_dir1
  |_dir2
  |_sites
    |_dir3

  -p, --packages
  A list of packages separated by `,`
  e.g. -p 'react redux'.

  -v, --dev-packages
  A list of packages separated by `,`
  e.g. -v 'lodash sass-loader'.

```
if you do `not specify packages or dev-packages` then it will run `npm i` in the specified directories.

### From the terminal

Same stuff just navigate to your root dir (or whichever dir you like to base your directories relative path definitions) and then something like:

```bash
node node_modules/root-installer -d 'app storybook' -v 'node-sass lodash'
OR
node node_modules/root-installer -d 'app storybook' -p 'react redux'
```

## Current Status
root-installer is a package that installs a list of packages in a list of directories. The point is to avoid all the `cd`s and to be able to bulk install in different dirs if needed.

Keep in mind that we create one node process per directory so don't ovedo it ;)

### Output
When you run the script you will see whatever `npm i` outputs as a process.

### Limitations
We need to run separate commands for normal and dev dependencies.

## Features to come
* CLI option for ROOT_DIR

## Contributions
I would very much appreciate any [code](https://github.com/Falenos/root-installer) contributions. Either to solve our limitations or create more features.

## License

[ISC](https://en.wikipedia.org/wiki/ISC_license)

## Support
root-installer is supported on Node 8 and above.