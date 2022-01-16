import React, { useState } from 'react'

import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'

// eslint-disable-next-line no-useless-escape
const INITIAL_TEXT_WITH_LATEX = 'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$. And $\overline{ℳ}_{ℊ,𝓃}$';

export default function App() {
  const [text, setText] = useState(INITIAL_TEXT_WITH_LATEX);
  return (
    <main style={{ padding: 12, maxWidth: 780 }}>
      <h1>
        <a href="https://github.com/harunurhan/react-latex-next" target="_blank" rel="noopener noreferrer">react-latex-next</a>
      </h1>
      <div style={{ marginBottom: 12 }}>
        <textarea 
          placeholder="Enter text with LaTeX"
          rows={6}
          style={{ width: 420 }}
          value={text}
          onChange={(event) => {
            setText(event.target.value)
        }}/>
      </div>
      <div>
        <Latex>{text}</Latex>
      </div>
    </main>
  );
}
