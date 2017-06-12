import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { doLogout } from '../actions/inboxActions';
import SvgIcon from '../components/SvgIcon';
import Logout from '../components/Logout';
import ServerStatus from '../components/ServerStatus';
const HeaderWrapper = styled.div`
  border-bottom: 1px solid;
  border-color: ${props => props.theme.colors.borderGrey};
  padding: .2rem 1rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundGrey};
`;

const LogoutStatusWrapper = styled.div`
  flex-flow: row nowrap;
  display: flex;
`
const Header = ({ inbox, dispatch }) => (
  <HeaderWrapper>
    <SvgIcon/>
    <LogoutStatusWrapper>
      { inbox.user && inbox.user.token && <Logout onClick={() => dispatch(doLogout())} />}
      <ServerStatus />
    </LogoutStatusWrapper>

  </HeaderWrapper>);

export default connect(state => ({inbox:state.inbox}))(Header);
