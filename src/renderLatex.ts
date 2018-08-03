/** Adapted from /contrib/auto-render/auto-render.js at github.com/Khan/KaTeX */

import { renderToString, ParseError } from 'katex';
import { KatexData, Delimiter } from './types';
import splitAtDelimiters from './splitAtDelimiters';


function splitWithDelimiters(text: string, delimiters: Delimiter[]): KatexData[] {
  let data = [{ type: 'text', data: text }];
  for (let i = 0; i < delimiters.length; i++) {
    const delimiter = delimiters[i];
    data = splitAtDelimiters(
      data, delimiter.left, delimiter.right,
      delimiter.display || false);
  }
  return data;
};

export default function renderLatexInTextAsHTMLString(text: string, delimiters: Delimiter[]): string {
  const data = splitWithDelimiters(text, delimiters);
  const fragments = []

  for (let i = 0; i < data.length; i++) {
    if (data[i].type === 'text') {
      fragments.push(data[i].data);
    } else {
      const latex = data[i].data;
      const displayMode = data[i].display;
      try {
        const rendered = renderToString(latex, { displayMode });
        fragments.push(rendered);
      } catch (error) {
        if (!(error instanceof ParseError)) {
          throw error;
        }
        fragments.push(data[i].rawData);
      }
    }
  }

  return fragments.join('');
};