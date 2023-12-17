# README-DEVELOP

Normally the site is built automatically by GitHub, but, for development
purposes, it is also possible to build it locally.

## Prerequisites

In addition to `git` required to get the source files,
the site is built with [docusaurus](https://docusaurus.io),
which requires only `node` >= 18 & `npm` to be available
globally, all other dependencies being installed locally in the project.

## Get project sources

The open source project is hosted on GitHub:

- <https://github.com/cronica-it/preview.git>

To clone a clean version of the stable branch (`master`),
run the following commands in a
terminal (on Windows use the _Git Bash_ console):

```sh
rm -rf ~/Work/cronica-it/preview.git && \
git clone https://github.com/cronica-it/preview.git \
  ~/Work/cronica-it/preview.git
```

Or, if the repo was already cloned:

```sh
git -C ~/Work/cronica-it/preview.git pull
```

## Install dependencies

To install docusaurus and all its dependencies, use the standard `npm install`
command in the `website` folder:

```bash
npm install -C ~/Work/cronica-it/preview.git/website
```

Docusaurus 3 is pretty young and warnings might be observed.

## Start server

To test the site locally, start a local web server on port 3000:

```bash
npm start -C ~/Work/cronica-it/preview.git/website
```

The script also starts a browser pointing to the local server,
and is updated automatically after each build.

## Bug reports

### blc rate limit

- <https://github.com/stevenvachon/broken-link-checker/discussions/262>

## `date:``

Calcularea datei din timestamp-ul folder-ului:

```sh
ls -l -D %s | sed -e 's|.* \([0-9][0-9]*\) \([0-9].*\)$|echo \2 "      date:" $(date -r \1 -u "+%Y-%m-%dT%H:%M:%S")|' | bash | sort
```

## Ghilimele 99-99 „”

Din ce recomandă Academia Română, ghilimelele folosite în limba română au codurile Unicode:

- U+201E (pentru caracterul „)
- U+201D (pentru caracterul ”).

De asemenea se pot obține cu Alt+0132 („) și Alt+0148 (”).
