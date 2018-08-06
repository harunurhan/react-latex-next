import * as React from 'react'

import renderLatex from './renderLatex';
import { Delimiter } from './types';
import './Latex.css'

export interface LatexProps {
  children: string;
  delimiters?: Delimiter[];
}

export default class Latex extends React.Component<LatexProps> {
  static defaultProps: Partial<LatexProps> = {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '\\(', right: '\\)', display: false },
      { left: '$', right: '$', display: false },
      { left: '\\[', right: '\\]', display: true },
    ]
  };

  render() {
    const { children, delimiters } = this.props
    const renderedLatex = renderLatex(children, delimiters!);
    return (
      <span className="__Latex__" dangerouslySetInnerHTML={{ __html: renderedLatex }} />
    )
  }
}
