import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchFeed } from '../actions/inboxActions';
import InboxFeeds from '../components/InboxFeeds';
import InboxThread from '../components/InboxThread';
import { InboxWrapper } from '../styles/styles-inbox';

class Inbox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selected: false,
      filter: false,
    }
    this.setSelected = this.setSelected.bind(this);
    this.fetchSelected = this.fetchSelected.bind(this);
  }
  setSelected(selected) {
    this.setState({selected});
  }
  fetchSelected() {
    // Leveraging react-redux return value
    return this.props.dispatch(fetchFeed(this.state.selected));
  }
  render() {
    return (
      <InboxWrapper>
        {/* <InboxLoader items={this.props.accounts} /> */}
        <InboxFeeds accounts={this.props.accounts} feeds={this.props.feeds} selected={this.state.selected} setSelected={this.setSelected}/>
        <InboxThread loading={this.props.loading} accounts={this.props.accounts} fetchSelected={this.fetchSelected} feed={this.state.selected ? this.props.feeds[this.state.selected] : null }/>
      </InboxWrapper>
    );
  }
}

const mapStateToProps = state => {
  return state.inbox;
}
export default connect(mapStateToProps)(Inbox);
