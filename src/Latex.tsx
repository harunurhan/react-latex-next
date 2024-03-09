import * as React from 'react'

import renderLatex, { Macros } from './renderLatex';
import { Delimiter } from './types';
import './Latex.css'

export interface LatexProps {
  children: string | string[];
  delimiters?: Delimiter[];
  strict?: boolean;
  macros?: Macros
}

const defaultDelimiters = [
  { left: '$$', right: '$$', display: true },
  { left: '\\(', right: '\\)', display: false },
  { left: '$', right: '$', display: false },
  { left: '\\[', right: '\\]', display: true },
]

export default function Latex({children, delimiters = defaultDelimiters, strict = false, macros }: LatexProps): React.ReactNode {
  const renderedLatex = renderLatex(Array.isArray(children) ? children.join('') : children, delimiters!, strict!, macros);
  return (
    <span className="__Latex__" dangerouslySetInnerHTML={{ __html: renderedLatex }} />
  )
}