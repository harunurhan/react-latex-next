# react-latex-next

> Render LaTeX in React apps

[![NPM](https://img.shields.io/npm/v/react-latex-next.svg)](https://www.npmjs.com/package/react-latex-next) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-latex-next
```

## Usage

```tsx
import * as React from 'react'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const LaTeX = 'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.'
class Example extends React.Component {
  render () {
    return (
      <Latex>{LaTeX}<Latex/>
    )
  }
}
```

## License

MIT © [harunurhan](https://github.com/harunurhan)
