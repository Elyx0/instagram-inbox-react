import { css } from 'styled-components';
import { breakpoints } from './theme-insta';

export function truncate() {
  return `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}


const bp = {};
Object.keys(breakpoints).forEach(b => {
  bp[b] = (...args) => css`
      @media (max-width: ${breakpoints[b]}px) {
        ${css(...args)}
      }
    `;
})

export const media = bp;
