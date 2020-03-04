import React, { Component } from 'react'

import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'


const TEXT_WITH_LATEX = 'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$. And $\overline{ℳ}_{ℊ,𝓃}$'
export default class App extends Component {
  render () {
    return (
      <div>
        <Latex>{TEXT_WITH_LATEX}</Latex>
      </div>
    )
  }
}
