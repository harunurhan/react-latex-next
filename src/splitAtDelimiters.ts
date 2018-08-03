/* Adapted from /contrib/auto-render/splitAtDelimiters.js at github.com/Khan/KaTeX */

import { KatexData } from './types';

function findEndOfMath (delimiterValue: string, text: string, startIndex: number): number {
  let index = startIndex;
  let braceLevel = 0;

  const delimLength = delimiterValue.length;

  while (index < text.length) {
      const character = text[index];

      if (braceLevel <= 0 &&
          text.slice(index, index + delimLength) === delimiterValue) {
          return index;
      } else if (character === '\\') {
          index++;
      } else if (character === '{') {
          braceLevel++;
      } else if (character === '}') {
          braceLevel--;
      }

      index++;
  }

  return -1;
};

export default function splitAtDelimiters(startData: KatexData[], leftDelimiterValue: string, rightDelimiterValue: string, display: boolean): KatexData[] {
  const finalData = [];

  for (let i = 0; i < startData.length; i++) {
      if (startData[i].type === 'text') {
          const text = startData[i].data;

          let lookingForLeft = true;
          let currIndex = 0;
          let nextIndex;

          nextIndex = text.indexOf(leftDelimiterValue);
          if (nextIndex !== -1) {
              currIndex = nextIndex;
              finalData.push({
                  type: 'text',
                  data: text.slice(0, currIndex),
              });
              lookingForLeft = false;
          }

          while (true) {
              if (lookingForLeft) {
                  nextIndex = text.indexOf(leftDelimiterValue, currIndex);
                  if (nextIndex === -1) {
                      break;
                  }

                  finalData.push({
                      type: 'text',
                      data: text.slice(currIndex, nextIndex),
                  });

                  currIndex = nextIndex;
              } else {
                  nextIndex = findEndOfMath(
                      rightDelimiterValue,
                      text,
                      currIndex + leftDelimiterValue.length);
                  if (nextIndex === -1) {
                      break;
                  }

                  finalData.push({
                      type: 'math',
                      data: text.slice(
                          currIndex + leftDelimiterValue.length,
                          nextIndex),
                      rawData: text.slice(
                          currIndex,
                          nextIndex + rightDelimiterValue.length),
                      display: display,
                  });

                  currIndex = nextIndex + rightDelimiterValue.length;
              }

              lookingForLeft = !lookingForLeft;
          }

          finalData.push({
              type: 'text',
              data: text.slice(currIndex),
          });
      } else {
          finalData.push(startData[i]);
      }
  }

  return finalData;
};