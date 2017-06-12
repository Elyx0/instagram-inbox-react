import styled,{ keyframes } from 'styled-components';
import { media } from './styles-utils';

export const LandingWrapper = styled.div`
  background-color: ${props => props.theme.colors.backgroundGrey};
`;

export const ContentWrapper = styled.div`
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;
`;

export const Heading = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: .4rem;
  color: ${props => props.theme.colors.contentGrey};
  transition: all .3s ease;
  overflow: hidden;
  ${props => (props.step ? `
    height:0;
    opacity:0;
    margin:0;
    padding:0;
  ` : '')}
`;
export const Button = styled.button`
  border: 1px solid;
  background: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};
  color: #fff;
  border-radius: 3px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  font-size: .9rem;
  padding:10px;
  font-weight: bold;
  width: 80vw;
  max-width: 600px;
  margin:auto;
  outline: none;
  margin-bottom: 6em;
  transition: background .3s ease,border .3s ease,color .3s ease;

  ${props => props.needsVerification && `
    background: transparent;
    color: ${props.theme.colors.green};
    border-color: ${props.theme.colors.borderGreen};
  `}

  ${props => props.disabled && `
    cursor: not-allowed;
    background: ${props.theme.colors.backgroundLight2};
    color: ${props.theme.colors.contentGrey};
    border-color: ${props.theme.colors.contentGrey};
  `}

`;



export const ErrorWrapper = styled.div`
  height: 4em;
  font-size: .8em;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.error}
`;


export const ContentBox = styled.div`
  height:50vh;
  width: 80vw;
  max-width: 600px;
  overflow: hidden;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid;
  position: absolute;
  transform-origin: 50% 50%;
  background-color: ${props => props.theme.colors.backgroundLight};
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;
  display: flex;
  transform: scale(1);
  border-color: ${props => props.theme.colors.borderGrey};
  transition: border .3s ease, box-shadow .3s ease, transform .3s ease;
  ${props => props.showBorders && `
    box-shadow: 0 0 0 .3em ${props.theme.colors.primary};
    border-color: ${props.theme.colors.primary};
  `}
  ${props => props.url && `
    background-image: url(${props.url});
    background-position: 50% 50%;
    background-size: cover;
  `}

  ${props => props.loading && `
    transform: scale(.3);
    animation: ${dance} 3s infinite alternate cubic-bezier(0.68, -0.65, 0.27, 1.55);
  `}
`;

const dance = keyframes`
  0,5%,100% {
    transform:scale(.3) rotateZ(0);
  }
  33% {
    transform:scale(.3) rotateZ(-15deg);
  }
  66% {
    transform:scale(.3) rotateZ(15deg);
  }
`

export const AnimWrapper = styled.div`
  max-width: 600px;
  margin:auto;
  height:50vh;
  width: 80vw;
  margin-bottom: 1em;
  position: relative;
`;

export const AsideWrapper = styled.aside`
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const LabelWrapper = styled.label`
  font-size: 2em;
`;

export const InputWrapper = styled.input`
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.lightgrey};
  color: ${props => props.theme.colors.darkText};
  flex: 0 1 355px;
  display: flex;
  padding: .5rem;
  font-size: 1em;
  outline: none;
  -webkit-appearance: none;
  margin-left: 1rem;
`;





export const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 1em;
  font-size: 0.8em;
  width: 100%;
  justify-content: space-around;
  border-radius: 6px;
  box-shadow: inset 0 0 7px 0px rgba(0,0,0,.1);
`
export const AlmostThereBlock = styled.p`
    text-align: center;
    font-weight: bold;
    padding:1em;
    line-height: 1.3em;
    max-width: 18em;
    letter-spacing: .01em;
    //border-radius: 3px;
    //border: 1px solid;
    //background: ;
    //border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
`;


const showOff = props => keyframes`
  0%,100% {
    background-color: ${props.theme.colors.primary};
    transform: scale(1);
  }
  50% {
    background-color: ${props.theme.colors.lightprimary};
    transform: scale(0.95);
  }
`;
export const OpenInstagramLink = styled.a`
  border: 1px solid;
  background: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};
  color: #fff;
  border-radius: 3px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  font-size: .9rem;
  padding:10px;
  text-decoration: none;
  margin-right: 1em;
  margin-left: 1em;
  font-weight: bold;
  display: block;
  transition: all .3s ease,border .3s ease,color .3s ease;
  animation: ${props => showOff(props)} 3s 1s ease infinite alternate;
  &:hover {
    animation-play-state: paused;
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const FormWrapper = styled.form`
display: flex;
z-index: 1;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
opacity: 1;
  transition: all .3s ease-in-out;
  ${props => props.loading && `
    opacity:0;
  `}
`;

export const ExplainWrapper = styled.div`
  background: ${props => props.theme.colors.backgroundLight};
  padding: .8rem;
  border-top: 1px solid;
  border-color: ${props => props.theme.colors.borderGrey};
  display: flex;
  flex-flow: row nowrap;
  align-items: space-around;
  white-space: pre-wrap;
  word-break:keep-all;
  ${ media.handheld`
    flex-flow: column wrap;
  `}
  a {
    color: black;
  }
`;

export const ExplainBlock = styled.div`
  margin: .8rem;
  h2 {
    color: ${props => props.theme.colors.dark}
  }
  p {
    color: ${props => props.theme.colors.contentGrey}
  }
`;

export const Footer = styled.footer`
  flex:1;
  border-top: 1px solid;
  border-color: ${props => props.theme.colors.borderGrey};
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  a {
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    display: inline-block;
    color: black;
  }
`
