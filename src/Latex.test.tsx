import * as React from 'react';
import { shallow } from 'enzyme';
import Latex from './Latex';

describe('Latex', () => {
  it('renders text that has multiple LaTeX formulas with $ delimiter', () => {
    const latex = 'three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.';
    const wrapper = shallow(<Latex>{latex}</Latex>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders text that has multiple LaTeX formulas with $$ delimiter', () => {
    const latex = 'three processes $$e^+e^-$$, gluon-gluon and $$\\gamma\\gamma \\to W t\\bar b$$.';
    const wrapper = shallow(<Latex>{latex}</Latex>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders raw LaTeX incase of LaTeX parse error', () => {
    const latex = 'Broken formulate: $\to W t\bar b$.';
    const wrapper = shallow(<Latex>{latex}</Latex>);
    expect(wrapper).toMatchSnapshot();
  });
});
