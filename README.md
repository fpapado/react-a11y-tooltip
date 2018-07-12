# React A11y Tooltip

> Accessible React Tooltip component

## Table of Contents

* [Features](#features)
* [Install](#install)
* [Motivation](#motivation)
* [Usage](#usage)

## Features

* Full presentational control for the caller (render props).
* Easy to understand source code. You should be able to fork and do your thing if desired.
* Ample documentation to help you understand the problem, in addition to the solutions.

What it does not do by itself:

* Style the tooltip. That is up to you :)

## Install

This package is distributed via [npm](https://www.npmjs.com/get-npm).

```shell
$ npm install --save react-a11y-tooltip
# or
$ yarn add react-a11y-tooltip
```

Then import according to your modules model and bundler, such as [Rollup](https://rollupjs.org/guide/en) and [Webpack](https://webpack.js.org/):

```js
// ES Modules
import { Tooltip } from "react-a11y-tooltip";

/// CommonJS modules
const { Tooltip } = require("react-a11y-tooltip");
```

A [UMD](https://github.com/umdjs/umd) version is also available on [unpkg](https://unpkg.com/):

```html
<script src="https://unpkg.com/react-a11y-tooltip/dist/react-a11y-tooltip.umd.js"></script>
```

## Motivation
:construction: WIP :construction

## Usage
### Quick Start

If you want to just dive in, do this:

```jsx
import { Tooltip } from "react-a11y-tooltip";

const App = () => {
  <p>
    The team had a great{" "}
    <Tooltip
      purpose="descriptive"
      renderContent="GP"
      renderTooltip="Games Played"
    />
    /
    <Tooltip
      purpose="descriptive"
      renderContent="GW"
      renderTooltip="Games Won"
    />{" "}
    ratio this season.
  </p>
}
```
