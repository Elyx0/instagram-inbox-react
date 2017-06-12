import React, { PureComponent } from 'react';
import { InboxRight, DefaultMessage, Toolbar } from '../styles/styles-inbox';

export default class InboxThread extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { error: false };
    this.shouldRenderError = this.shouldRenderError.bind(this);
  }
  async componentDidUpdate() {
    if (this.props.loading || this.state.loading || this.state.error) return;
    const { feed } = this.props;
    if (!feed) return;
    if (!feed.lastFetchTime || (+(new Date())) - feed.lastFetchTime > 1000 * 60 * 10) {
        // We need fresh the data.
      this.setState({ loading: true, error: false });
      try {
        await this.props.fetchSelected();
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  shouldRenderError() {
    const { feed, accounts } = this.props;
    if (this.state.error) {
      return <DefaultMessage error><p>Oops 🙈 !</p><p>Something bad happened, we recommend you logout then log back in.</p><p>Error: {this.state.error.message}</p></DefaultMessage>;
    }
    if (!feed) return <DefaultMessage>Select a conversation</DefaultMessage>;
  }
  render() {
    return (
      <InboxRight>
        { this.shouldRenderError() }
      </InboxRight>
    );
  }
}
