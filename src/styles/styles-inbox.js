import styled, { keyframes } from 'styled-components';
import { media, truncate } from './styles-utils';

export const InboxWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 57px);
  height: calc(100vh - 57px);
  overflow: hidden;
`;

export const InboxLeft = styled.div`
  border-right: 1px solid ${props => props.theme.colors.borderGrey};
  flex: 1;
  overflow-y: auto;
`;

export const InboxFeed = styled.div`
  padding: 1em;
  display: flex;
  cursor: pointer;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  ${ media.handheld`
    justify-content: center;
  `}
  overflow: hidden;
  transition: background .3s ease;
  &:hover {
    background-color: ${props => props.theme.colors.backgroundGrey};
  }
  ${props => props.selected && `
    background-color: ${props.theme.colors.backgroundGrey};
  `}

  svg {
    margin-right: .5em;
    flex-shrink: 0;
    ${ media.handheld`
        margin-right:0;
    `}
  }
`

export const InboxFeedDetails = styled.div`
  flex-flow: column nowrap;
  display: flex;
  user-select: none;
  overflow: hidden;
  justify-content: space-between;
  ${ media.handheld`
      display:none;
  `}
  p:nth-child(1) {
    font-size: .9rem;
    color:${props=>props.theme.colors.dark};
  }

  p {
    ${truncate('100px')};
    font-size: .8rem;
    margin:0;
    color:${props=>props.theme.colors.contentGrey};
  }


`

export const InboxRight = styled.div`
  background: rgb(252, 252, 252);
  flex: 4;
  position: relative;
  display: flex;
`

export const DefaultMessage = styled.div`
  align-self: center;
  flex:1;
  text-align: center;
  font-size: .9em;
  color: ${props => props.error ? props.theme.colors.error : props.theme.colors.contentGrey};
`;

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ExportIcon = styled.div`
  position: absolute;
  top:10px;
  right:10px;
  z-index: 9999;
  font-size: 1.2em;
  border-radius: 50%;
  background: rgba(239, 239, 239,.7);
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,.2);
  width: 1.5em;
  height: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: .1em;
  ${props => props.exporting && `
    animation: ${spin} 2s linear infinite;
  `};
  @media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {
    padding-right: 0;
}

`
