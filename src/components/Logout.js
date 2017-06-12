import React from 'react';
import styled from 'styled-components';


const Door = styled.svg`
  border-radius: 2px;
  background: rgb(185, 185, 185);
  perspective: 1000px;
  backface-visibility: hidden;
  cursor: pointer;
  margin-right: 1em;
  g {
    transition: all .5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: perspective(150px) rotateY(0deg);
    transform-origin: 0% 50%;
    &:hover {
      transform: perspective(150px) rotateY(45deg);
    }
  }
`;
const Logout = ({ onClick }) => (
  <Door onClick={onClick} width="25px" height="28px" viewBox="0 0 35 40">
    <g>
      <rect x="2" y="2" height="38" width="31" fill="#fafafa" />
      <circle cx="25" cy="23.5" r="2" fill="rgb(185, 185, 185)" />
    </g>
  </Door>
);
export default Logout;
