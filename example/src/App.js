import React, { useState } from "react";

import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

// eslint-disable-next-line no-useless-escape
const INITIAL_TEXT_WITH_LATEX =
  "We give illustrations for the three processes $e^+e^-$, gluon-gluon and some macros: $\\f\\relax{x} = 1$";
const INITIAL_STRICT_FLAG = false;
const INITIAL_MACROS = { "\\f": "#1f(#2)" };
const MACROS_PLACEHOLDER = `Default: ${JSON.stringify(INITIAL_MACROS)}`

export default function App() {
  const [text, setText] = useState(INITIAL_TEXT_WITH_LATEX);
  const [strict, setStrict] = useState(INITIAL_STRICT_FLAG);
  const [macros, setMacros] = useState(INITIAL_MACROS);
  return (
    <main style={{ padding: 12, maxWidth: 780 }}>
      <h1>
        <a
          href="https://github.com/harunurhan/react-latex-next"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-latex-next
        </a>
      </h1>
      <div style={{ marginBottom: 8 }}>
        <textarea
          placeholder="Enter text with LaTeX"
          rows={6}
          style={{ width: 420 }}
          value={text}
          onChange={(event) => {
            console.log(event);
            setText(event.target.value);
          }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 4 }}>
          <label for="strictCheckBox">Strict</label>
          <input
            id="strictCheckBox"
            type="checkbox"
            onChange={(event) => {
              setStrict(event.target.checked);
            }}
          />
        </div>
        <div>
          <label for="macrosJsonTextBox" style={{ verticalAlign: 'top'}}>
            Macros (JSON)
          </label>
          <textarea
            id="macrosJsonTextBox"
            style={{ marginLeft: 4, width: 308 }}
            placeholder={MACROS_PLACEHOLDER}
            rows={2}
            onChange={(event) => {
              try {
                const marcos = JSON.parse(event.target.value);
                setMacros(marcos);
              } catch (error) {
                // TODO: show feedback to the user
                setMacros(INITIAL_MACROS)
              }
            }}
          />
        </div>
      </div>
      <div>
        <Latex strict={strict} macros={macros}>
          {text}
        </Latex>
      </div>
    </main>
  );
}
