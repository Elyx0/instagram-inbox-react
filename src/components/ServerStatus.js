import React, { Component } from 'react';
import styled from 'styled-components';
import { endPoint } from './Api';

const Indicator = styled.div`
  width:8px;
  height:8px;
  background-color: ${props => props.theme.indicator[props.status].bgc};
  border-radius: 50%;
  box-shadow: 0px 0px 5px  ${props => props.theme.indicator[props.status].bxs};
  transition: background-color 1s ease,
              box-shadow 2s ease;
  margin-left:.5rem;
`

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .6rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.colors.lightgrey};
`;

class ServerStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'unknown',
    };
    this.statusCheck = this.statusCheck.bind(this);
  }
  componentDidMount() {
    // Warms up the backend if sleeping
    this.statusCheck();
    setInterval(this.statusCheck, 60000);
  }
  async statusCheck() {
    try {
      const res = await fetch(endPoint);
      const json = await res.json();
      if (json.error) throw new Error('Api Error');
      this.setState({ status: 'success' });
    } catch (e) {
      this.setState({ status: 'failed' });
    }
  }
  render() {
    return (
      <StatusWrapper>
      <span>Status</span><Indicator status={this.state.status} />
      </StatusWrapper>
    );
  }

}

export default ServerStatus;
