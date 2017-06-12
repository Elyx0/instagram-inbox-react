import React, { PureComponent } from 'react';
import {
  InboxLeft,
  InboxFeed,
  InboxFeedDetails,
} from '../styles/styles-inbox';
import InboxAvatar from '../components/InboxAvatar';

// Transform to stateless if no state;
export default class InboxFeeds extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderFeeds(feeds) {
    return Object.keys(feeds).map(id => {
      const feed = feeds[id];
      const lastMessage = feed.items[feed.items.length-1];
      const { participants } = feed;
      const participantsAccounts = participants.map(id => this.props.accounts[id]);
      return <InboxFeed key={id} selected={this.props.selected == id} onClick={this.props.setSelected.bind(null,id)}>
          <InboxAvatar feedId={`avatar_${id}`} urls={participantsAccounts.map(a => a.picture)} />
          <InboxFeedDetails>
            <p>{ participantsAccounts.map(p => p.username).join(' & ')}</p>
            <p>{ lastMessage.text || lastMessage.actionLog && lastMessage.actionLog.description}</p>
          </InboxFeedDetails>
        </InboxFeed>
    });
  }
  render() {
    return (
      <InboxLeft>
      {  this.renderFeeds(this.props.feeds) }
      </InboxLeft>
    );
  }
}
