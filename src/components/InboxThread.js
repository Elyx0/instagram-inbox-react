import React, { PureComponent } from 'react';
import { ListView, ListViewItem } from 'react-scrollable-list-view';
import {
  InboxRight,
  DefaultMessage,
  ExportIcon,
  Toolbar,
} from '../styles/styles-inbox';
import Message from '../components/Message';
import createPDF from './PDFExporter';
export default class InboxThread extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { error: false };
    this.shouldRenderError = this.shouldRenderError.bind(this);
    this.renderThread = this.renderThread.bind(this);
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
    return this.renderThread(feed,accounts);
  }

  async exportPdf(feed, accounts) {
    this.setState({exporting:true});
    try {
      const res = await createPDF(feed, accounts);
    }
    catch(e) {
      console.error(e);
    }
    finally {
        this.setState({exporting:false});
    }
  }

  renderThread(feed, accounts) {
    let previousTime = false;
    const messages = feed.items.map((msg, i) => {
      const showTime = previousTime ? (previousTime - msg.created > 60*60*24 ? true : false) : true;
      previousTime = msg.created;
      return (
       <ListViewItem key={i}>
        <Message id={i} showTime={showTime} participants={feed.participants} msg={msg} accounts={accounts} />
      </ListViewItem>);
    });
     return (
       <div>
       <ExportIcon exporting={this.state.exporting} onClick={this.exportPdf.bind(this,feed, accounts)}>{this.state.exporting ? '💌': '📤'}</ExportIcon>
       <ListView runwayItems={10} runwayItemsOpposite={10} aveCellHeight={30}>
         { messages }
       </ListView>
      </div>
     );
  }

  render() {
    const loading = this.props.loading || this.state.loading;
    return (
      <InboxRight>
        { loading && <DefaultMessage>Loading... Shouldn't take too long 🕐</DefaultMessage>}
        { !loading && this.shouldRenderError() }
      </InboxRight>
    );
  }
}
