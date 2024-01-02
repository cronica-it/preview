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
