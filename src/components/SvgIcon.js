import React from 'react';
import styled from 'styled-components';
const SvgWrapper = styled.svg`
 cursor: pointer;
 &:hover {
   .main {
     fill: url(#rave);
   }
   .caption {
     fill: url(#rave);
   }
 }
 ${props => props.animate && `
   .main {
     fill: url(#rave);
   }
   .caption {
     fill: url(#rave);
   }
 `}
`;

const SvgIcon = ({ animate }) => (
  <SvgWrapper animate={animate} width="350px" height="40px" viewBox="0 0 10000 1000">
    <defs>
      <path id="main" d="M500,0 C223.857,0 0,223.857 0,500 C0,776.143 223.857,1000 500,1000 C776.143,1000 1000,776.143 1000,500 C1000,223.857 776.143,0 500,0 L500,0 Z M262.75,160 L741.594,160 C797.31,160 842.188,200.066 842.188,249.844 L842.188,750.156 C842.188,799.934 797.31,840 741.594,840 L262.75,840 C207.034,840 162.188,799.935 162.188,750.156 L162.188,249.844 C162.188,200.066 207.034,160 262.75,160 L262.75,160 Z M677.469,230.406 C664.946,230.406 654.844,240.476 654.844,253 L654.844,325.344 C654.844,337.867 664.946,347.938 677.469,347.938 L749.813,347.938 C762.336,347.938 772.407,337.868 772.407,325.344 L772.407,253 C772.407,240.477 762.337,230.406 749.813,230.406 L677.469,230.406 L677.469,230.406 Z M616.312,358.5 C616.808,358.854 617.319,359.204 617.812,359.562 L617.812,358.5 L616.312,358.5 L616.312,358.5 Z M500,372 C417.157,372 350,439.157 350,522 C350,604.843 417.157,672 500,672 C582.843,672 650,604.843 650,522 C650,439.157 582.843,372 500,372 L500,372 Z M200,428.312 L200,740 C200,773.24 226.76,800 260,800 L740,800 C773.24,800 800,773.24 800,740 L800,434.656 L680.406,434.656 C692.951,460.771 700,490.028 700,520.938 C700,631.138 610.669,720.469 500.469,720.469 C390.269,720.469 300.938,631.138 300.938,520.938 C300.938,487.501 309.184,455.995 323.719,428.313 L200,428.313 L200,428.312 Z M200,428.312"></path>
      <text fontSize="50rem" id="caption" x="15%" y="70%" fontFamily="Billabong">Instagram Inbox Reader</text>

    </defs>
    <use className="main" xlinkHref="#main" x="0" y="0"></use>
    <use className="caption" xlinkHref="#caption" x="0" y="0"></use>
    <use style={{fill: "rgba(44,242,187,0)",transition:"fill 500ms ease"}} xlinkHref="#caption" x="0" y="0"></use>
    <use style={{fill: "rgba(44,242,187,0)",transition:"fill 500ms ease"}} xlinkHref="#main" x="0" y="0"></use>
    <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0">
      <stop offset="0%" stopColor="#00ff00"></stop>
      <stop offset="7.1428571429%" stopColor="#86fa00"></stop>
      <stop offset="14.285714286%" stopColor="#ffdb00"></stop>
      <stop offset="21.428571429%" stopColor="#ff8d00"></stop>
      <stop offset="28.571428572%" stopColor="#ff0001"></stop>
      <stop offset="35.714285715%" stopColor="#ff0068"></stop>
      <stop offset="42.857142857%" stopColor="#ff00ce"></stop>
      <stop offset="50%" stopColor="#ff00ff"></stop>
      <stop offset="57.142857143%" stopColor="#ff2eff"></stop>
      <stop offset="64.285714286%" stopColor="#b437ff"></stop>
      <stop offset="71.428571429%" stopColor="#616aff"></stop>
      <stop offset="78.571428572%" stopColor="#00c0ff"></stop>
      <stop offset="85.714285715%" stopColor="#00d8ff"></stop>
      <stop offset="92.857142858%" stopColor="#00ffff"></stop>
      <stop offset="100%" stopColor="#00ff00"></stop>
    </linearGradient>
    <pattern id="rave" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">
      <rect x="-40.0002%" y="0" width="2000%" height="100%" fill="url(#rainbow)">
        <animate attributeType="XML" attributeName="x" from="-1900%" to="100%" dur="10s" repeatCount="indefinite"></animate>
      </rect>
      <rect x="-1963%" y="0" width="2000%" height="100%" fill="url(#rainbow)">
        <animate attributeType="XML" attributeName="x" from="-2800%" to="-1900%" dur="10s" repeatCount="indefinite"></animate>
      </rect>
    </pattern>
  </SvgWrapper>
);

export default SvgIcon;
