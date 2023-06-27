# UI Toolkit for Jupyter

**WIP this is early work in progress.** But don't hesitate to open issues and PRs if you want to
help.

[![Extension status](https://img.shields.io/badge/status-ready-success 'The package is ready to be used')](https://jupyterlab-contrib.github.io/)
[![NPM Version](https://img.shields.io/npm/v/@jupyter/web-components?color=blue)](https://www.npmjs.com/package/@jupyter/web-components)
[![Toolkit CI Status](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/actions/workflows/ci.yml/badge.svg)](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/actions/workflows/ci.yml)
[![Deploy Docs Status](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/actions/workflows/docs-cd.yml/badge.svg)](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jupyterlab-contrib/jupyter-ui-toolkit/main)

![Toolkit for Jupyter Artwork](https://raw.githubusercontent.com/jupyterlab-contrib/jupyter-ui-toolkit/main/packages/components/docs/assets/toolkit-artwork.png)

[Explore the components](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/) | [Online JupyterLab demo](https://mybinder.org/v2/gh/jupyterlab-contrib/jupyter-ui-toolkit/main)

## Introduction

The UI Toolkit is a component library for building web interfaces in Jupyter ecosystem (JupyterHub,
Jupyter Widgets, JupyterLab,...).

Features of the library include:

- **Implements the Jupyter design language:** All components follow the design language of Jupyter
  – enabling developers to create extensions that have a consistent look and feel with the rest of
  the ecosystem.
- **Automatic support for color themes:** All components are designed with theming in mind and will
  automatically display the current application theme.
- **Use any tech stack:** The library ships as a set of web components, meaning developers can use
  the toolkit no matter what tech stack (React, Vue, Svelte, etc.) their extension is built with.
- **Accessible out of the box:** All components ship with web standard compliant ARIA labels and
  keyboard navigation.

This repository contains three packages:

- [`@jupyter/web-components`](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/tree/main/packages/components/):
  The main package defining the web components.
- [`@jupyter/react-components`](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/tree/main/packages/react-components):
  Wrapped the web components to use them with [React](https://reactjs.org).
- [`jupyter-ui-demo`](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/tree/main/packages/lab-example):
  Unpublished JupyterLab extension to demonstrate the integration of the toolkit.

Those features are brought through the [Fast Design](https://www.fast.design/). And it is inspired
by the [WebView toolkit for Visual Studio Code](https://github.com/microsoft/vscode-webview-ui-toolkit)
as example for creating a customized toolkit.

## Release

The UI Toolkit is currently in a proof of concept. Track progress towards 1.0 [here](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/issues?q=is%3Aopen+is%3Aissue+milestone%3Av1.0).
Styles and API are not guarantee between minor versions prior to v1.0.0.

## Getting started

You will need to install `yarn` (for example with `npm install --global yarn`).

To build the components packages, execute:

```sh
yarn install
yarn build
```

Then to interactively test or develop web components:

```sh
cd packages/components
yarn start
```

### JupyterLab demo extension

To test locally the JupyterLab demo extension, using `conda` package manager:

```sh
conda create -n jupyter-toolkit -c conda-forge -y nodejs yarn jupyterlab=3
conda activate jupyter-toolkit
yarn install
yarn build
pip install -e .
jupyter labextension develop --overwrite .
```

## Documentation

Further documentation can be found in the following places:

- [Component Docs](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/tree/main/packages/components/docs/components.md)
- [Storybook (Interactive Component Sandbox)](https://jupyterlab-contrib.github.io/jupyter-ui-toolkit/)
- [Toolkit Extension Samples](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/tree/main/packages/lab-example):
  [Try online](https://mybinder.org/v2/gh/jupyterlab-contrib/jupyter-ui-toolkit/main)

## Contributing

See the [contributing](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/tree/main/CONTRIBUTING.md) documentation.
