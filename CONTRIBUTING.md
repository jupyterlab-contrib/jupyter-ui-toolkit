# Contributing to JupyterLab

If you're reading this section, you're probably interested in
contributing to JupyterLab. Welcome and thanks for your interest in
contributing!

Please take a look at the Contributor documentation, familiarize
yourself with using JupyterLab, and introduce yourself to the community
(on the mailing list or discourse) and share what area of the project
you are interested in working on. Please also see the Jupyter `Community Guides <https://jupyter.readthedocs.io/en/latest/community/content-community.html>`\_\_.

We have labeled some issues as `good first issue <https://github.com/jupyterlab/jupyterlab/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22>`**
or `help wanted <https://github.com/jupyterlab/jupyterlab/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22>`**
that we believe are good examples of small, self-contained changes. We
encourage those that are new to the code base to implement and/or ask
questions about these issues.

If you believe you’ve found a security vulnerability in JupyterLab or
any Jupyter project, please report it to security@ipython.org. If you
prefer to encrypt your security reports, you can use `this PGP public key <https://raw.githubusercontent.com/jupyter/notebook/master/docs/source/ipython_security.asc>`\_\_.

.. contents:: Table of contents
:local:
:depth: 1

## General Guidelines for Contributing

For general documentation about contributing to Jupyter projects, see
the `Project Jupyter Contributor Documentation <https://jupyter.readthedocs.io/en/latest/contributing/content-contributor.html>`**
and `Code of Conduct <https://github.com/jupyter/governance/blob/master/conduct/code_of_conduct.md>`**.

All source code is written in
`TypeScript <https://www.typescriptlang.org/Handbook>`**. See the `Style Guide <https://github.com/jupyterlab/jupyterlab/wiki/TypeScript-Style-Guide>`**.

All source code is formatted using `prettier <https://prettier.io>`\_\_.
The benefit of using a code formatter like prettier is that it removes the topic of
code style from the conversation when reviewing pull requests, thereby
speeding up the review process.

You may use the prettier npm script (e.g. `npm run prettier` or
`yarn prettier`) to format the entire code base.
We recommend installing a prettier extension for your code editor and
configuring it to format your code with a keyboard shortcut or
automatically on save.

## Submitting a Pull Request Contribution

Generally, an issue should be opened describing a piece of proposed work
and the issues it solves before a pull request is opened.

Issue Management
^^^^^^^^^^^^^^^^

Opening an issue lets community members participate in the design
discussion, makes others aware of work being done, and sets the stage
for a fruitful community interaction. A pull request should reference
the issue it is addressing. Once the pull request is merged, the issue
related to it will also be closed. If there is additional discussion
around implementation the issue may be re-opened. If additional
discussion is desired, or if the pull request doesn't fully address the
locked issue, please open a new issue referencing the locked issue.
