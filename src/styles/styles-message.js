import styled from 'styled-components';

export const TimeWrapper = styled.div`
    text-align:center;
    font-weight: bold;
    font-size: .8em;
    width: 100%;
    color: ${props => props.theme.colors.contentGrey};
`;

export const TimeHover = styled.time`
  opacity: 0;
  transition: .3s ease-in-out;
  font-size: .6em;
  color: ${props => props.theme.colors.contentGrey};
`;

export const TextWrapper = styled.div`
  border-radius: 1em;
  margin-left: .3em;
  margin-right: .3em;
  font-size: .9em;
  padding: .2em .8rem;
  max-width: 80%;
  background: ${props => props.theme.colors.backgroundLight2};
  ${props => props.me && `
    background: ${props.theme.colors.primary};
    color: white;
  `}
  ${props => props.type === 'placeholder' && `
    opacity: .2;

  `}
`;

export const AvatarWrapper = styled.div`
background-position: 50% 50%;
background-size: cover;
width: 1.5em;
height: 1.5em;
flex-shrink: 0;
border-radius: 50%;
${props => props.url && `
  background-image: url(${props.url});
`}
`;

export const MessageWrapper = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  padding:.3em;
  ${props => props.me && `
    flex-direction: row-reverse;
  `}
  &:hover {
    time {
      opacity: 1;
    }
  }
`;

export const MediaShare = styled.div`
  border-radius: 6px;
  border: 1px solid ${props=>props.theme.colors.contentGrey};
  max-width: 40%;
  display: flex;
  background: ${props => props.theme.colors.backgroundLight};
  flex-flow: column nowrap;
  margin-left: .3em;
  margin-right: .3em;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    width:100%;
  }
`;

export const MediaCaption = styled.p`
  width: 100%;
  font-size: .8em;
  color: ${props=>props.theme.colors.dark};
`;

export const MediaImage = styled.div`

`;


export const MediaWrapper = styled.a`
background-position: 50% 50%;
background-size: cover;
width: 200px;
color: transparent;
height: ${props=> `${~~(props.mW/props.mH*200)}px`};
background-image: url(${props => props.url});
${props => props.round && `
  border-radius: 10px;
`}
${props => props.allowMargins && `
  margin-left: .3em;
  margin-right: .3em;
`}
`;
