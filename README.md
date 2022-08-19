# react-latex-next

> Render LaTeX beautifully in React apps!

[![NPM](https://img.shields.io/npm/v/react-latex-next.svg)](https://www.npmjs.com/package/react-latex-next) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

It renders all fragments of LaTeX (between delimiters) in a given text, similar to [KaTeX's auto-render](https://katex.org/docs/autorender.html).

See [the demo](https://react-latex.netlify.app).

## Install

```bash
yarn add react-latex-next

npm install --save react-latex-next
```

## Usage

```tsx
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

function Example() {
  return (
    <Latex>We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.</Latex>
  )
}
```

### delimiters

List of delimiters to look for math you can configure it via `delimiters` prop: `<Latex delimiters={[...]}>`

#### A delimiter

```js
{
  left: "A string which starts the math expression (i.e. the left delimiter)"
  right: "A string which ends the math expression (i.e. the right delimiter)"
  display: "A boolean of whether the math in the expression should be rendered in display mode or not"
}
```

#### Default delimiters

```js
[
  { left: '$$', right: '$$', display: true },
  { left: '\\(', right: '\\)', display: false },
  { left: '$', right: '$', display: false },
  { left: '\\[', right: '\\]', display: true },
]
```

### strict

It renders by default non-strict which means it falls back to raw text (without delimiters) in case of error.
You can enable strict mode like below, which will throw the error instead.

```jsx
<Latex strict>{textWithSomeBrokenLatex}</Latex>
```

### macros

```jsx
<Latex macros={{ "\\R": "\\mathbb{R}" }}>{text}</Latex>
```

## License

MIT © [harunurhan](https://github.com/harunurhan)
