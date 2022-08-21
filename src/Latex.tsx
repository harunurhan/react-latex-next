import * as React from 'react'

import renderLatex from './renderLatex';
import { Delimiter } from './types';
import './Latex.css'

export interface LatexProps {
  children: string;
  delimiters?: Delimiter[];
  strict?: boolean;
  macros?: object
}

export default class Latex extends React.Component<LatexProps> {
  static defaultProps: Partial<LatexProps> = {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '\\(', right: '\\)', display: false },
      { left: '$', right: '$', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
    strict: false
  };

  render() {
    const { children, delimiters, strict, macros } = this.props
    const renderedLatex = renderLatex(children, delimiters!, strict!, macros);
    return (
      <span className="__Latex__" dangerouslySetInnerHTML={{ __html: renderedLatex }} />
    )
  }
}
