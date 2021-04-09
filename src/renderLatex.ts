/** Adapted from /contrib/auto-render/auto-render.js at github.com/Khan/KaTeX */

import { renderToString  } from 'katex';
import { Delimiter } from './types';
import splitAtDelimiters from './splitAtDelimiters';


export default function renderLatexInTextAsHTMLString(text: string, delimiters: Delimiter[], strict: boolean): string {
  const data = splitAtDelimiters(text, delimiters);
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
        if (strict) {
          throw error;
        }
        fragments.push(data[i].data);
      }
    }
  }

  return fragments.join('');
};
