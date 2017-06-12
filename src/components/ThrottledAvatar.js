import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { endPoint } from './Api';

const Avatar = styled.div`
    border-radius: 50%;
    border: 0em solid ${props => props.theme.colors.backgroundLight2};
    height:10em;
    width:10em;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    background: ${props => props.theme.colors.backgroundLight2};
    backface-visibility: hidden;
    box-shadow: 0 0 0em 0em ${props => props.theme.colors.primary};
    transition: transform .5s cubic-bezier(0.68, -0.55, 0.27, 1.55),
                border-radius 1.2s ease-in-out,
                box-shadow .5s ease;
    ;
    transform: scale(0);
    transform-origin: 50% 50%;
    ${props => props.url && `
      transform: scale(1);
      border-width: .8em;
      box-shadow: 0 0 0em 1em ${props.theme.colors.primary};
      `}

    &::after {
      display: block;
      content: '';
      border-radius: 50%;
      height:8em;
      width:8em;
      transform: scale(.001) rotateX(360deg);
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      transition: transform .3s cubic-bezier(0.68, -0.55, 0.27, 1.55),
                  border-radius 1.2s ease-in-out,
                  box-shadow .5s ease;
      ;
      border: .5em solid ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.backgroundLight2};
      ${props => props.url && `
        transform: scale(1) rotateX(0deg);
        background-image: url(${props.url});
      `}
    }
`;

const TopBar = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 0em;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: all .4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  ${props => props.url && `
    height: 7em;
  `};
  &::before {
        display: flex;
        position: absolute;
        background: ${props => props.theme.colors.backgroundLight2};
        align-self: center;
        top: 7em;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        transform-origin: 50% 50%;
        left:0;
        right:0;
        height: 30em;
        z-index: 0;
        content: '';
        transform: scale(0);
        transition: all .5s cubic-bezier(0.48, -0.85, 0.27, 1);
        ${props => props.url && `
          transform: scale(1);
        `};
  }

  &::after {
        display: flex;
        background: ${props => props.theme.colors.backgroundLight2};
        align-self: center;
        margin-right: 1.6em;
        border-radius: .3em;
        width: 0em;
        height: 0em;
        z-index: 0;
        content: '';
        transform-origin: 50% 50%;
        transition: all .5s ease-in-out;
        ${props => props.url && `
          width: 2.3em;
          height: 2em;
        `};
  }
`;


class ThrottledAvatar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
    };
    this.fetchAvatar = this.fetchAvatar.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.name !== prevProps.name) {
      this.fetchAvatar();
    }
  }

  async fetchAvatar() {
    this.setState({ avatar: null });
    this.props.propagateBorders(false);
    const { name } = this.props;
    if (name && name.length) {
      try {
        const res = await fetch(`${endPoint}/avatar/${name}`);
        const json = await res.json();
        const { avatar } = json.data;
        this.props.propagateBorders(avatar);
        this.setState({ avatar });
      } catch (e) {
        // Swallow
      }
    }
  }

  render() {
    return (
      <div>
        <TopBar url={this.state.avatar}/>
        <Avatar url={this.state.avatar} />
      </div>
    );
  }

}

export default ThrottledAvatar;
