# Contributing to UI Toolkit for Jupyter

If you're reading this section, you're probably interested in
contributing to UI Toolkit for Jupyter. Welcome and thanks for your interest in
contributing!

Please take a look at the Contributor documentation and see the Jupyter [Community Guides](https://jupyter.readthedocs.io/en/latest/community/content-community.html).

We have labeled some issues as [good first issue](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)
or [help wanted](https://github.com/jupyterlab/jupyterlab/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
that we believe are good examples of small, self-contained changes. We
encourage those that are new to the code base to implement and/or ask
questions about these issues.

## Development installation

You will need to install `yarn` (for example with `npm install --global yarn && yarn set version berry`).

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

### React components

The react components wrapper are initialized using [custom-element-react-wrappers](https://github.com/break-stuff/cem-tools/tree/main/packages/react-wrappers).
The initialization can be reproduced by running in `packages/components` the script `yarn run build:react`.
Unfortunately the initial code needs lots of changes to be usable in this case:

- Changing the typing to inherit from `React.AllHTMLAttributes` - minus some event handlers that needs to be overridden.
- Changing `useImperativeHandle` to expose the full HTMLElement using:

```js
useImperativeHandle(forwardedRef, () => ref.current, [ref.current]);
```

- Remove internal fast-specific properties like `$presentation`, `styles` and `template`.
- The tag name, the properties and the events are extracted from the doc string of
  the element class definition in `packages/components`. You may need to add some
  new doc tags to get all the properties and events.

### JupyterLab demo extension

To test locally the JupyterLab demo extension, using `conda` package manager:

```sh
conda create -n jupyter-toolkit -c conda-forge -y nodejs yarn=3 jupyterlab=4
conda activate jupyter-toolkit
yarn install
yarn build
pip install -e .
jupyter labextension develop --overwrite .
```

## General Guidelines for Contributing

For general documentation about contributing to Jupyter projects, see
the [Project Jupyter Contributor Documentation](https://jupyter.readthedocs.io/en/latest/contributing/content-contributor.html)
and [Code of Conduct](https://github.com/jupyter/governance/blob/master/conduct/code_of_conduct.md).

All source code is written in
[TypeScript](https://www.typescriptlang.org/Handbook). See the [Style Guide](https://github.com/jupyterlab/jupyterlab/wiki/TypeScript-Style-Guide).

All source code is formatted using [prettier](https://prettier.io).
The benefit of using a code formatter like prettier is that it removes the topic of
code style from the conversation when reviewing pull requests, thereby
speeding up the review process.

You may use the prettier npm script (e.g.
`yarn prettier`) to format the entire code base.
We recommend installing a prettier extension for your code editor and
configuring it to format your code with a keyboard shortcut or
automatically on save.

## Submitting a Pull Request Contribution

Generally, an issue should be opened describing a piece of proposed work
and the issues it solves before a pull request is opened.

## Issue Management

[Opening an issue](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/issues/new/choose) lets community members participate in the design
discussion, makes others aware of work being done, and sets the stage
for a fruitful community interaction. A pull request should reference
the issue it is addressing. Once the pull request is merged, the issue
related to it will also be closed. If there is additional discussion
around implementation the issue may be re-opened. If additional
discussion is desired, or if the pull request doesn't fully address the
locked issue, please open a new issue referencing the locked issue.
