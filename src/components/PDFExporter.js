import { cloneDeep } from 'lodash';
import moment from 'moment';
import { colors } from '../styles/theme-insta';

const docBase = {
  styles: {
    time: {
      fontSize: 10,
      alignment: 'center',
      color: colors.contentGrey,
    },
    blockStart: {
      fontSize: 10,
    },
    blockBold: {
      bold: true,
    },
    blockRight: {
      alignment: 'right',
      color: colors.primary,
    },
    blockLeft: {
      alignment: 'left',
      color: colors.dark,
    },
  },
};

const formatMessage = (newBlock, participants, showTime, msg, accounts, content) => {
  let { accountId, created, id, actionLog, mediaShare, text, type, media } = msg;
  const isMe = !~participants.indexOf(accountId);
  const person = accounts[accountId];
  if (showTime) {
    content.push({
      text: moment(msg.created).format('MM/DD/YYYY'),
      style: ['time'],
    });
  }
  if (newBlock) {
    content.push({
      text: ` [ ${person.username} ] `,
      style: ['blockStart', 'blockBold', isMe ? 'blockRight' : 'blockLeft'],
    });
  }
  const style = ['blockStart'];
  if (type == 'placeholder') text = '[Content Unavailable]';
  style.push(isMe ? 'blockRight' : 'blockLeft');

  if (media) {
    for (let i = 0; i < media.length; i++) {
      const m = media[i];
      const url = m.url;
      content.push({ text: '[Open Image]', link: url, style });
      content.push({
        image: url,
        fit: [100, 100],
        style,
      });
    }
  }
  return text && content.push({ text, style });
};

const getBase64 = url => new Promise(async (res) => {
  const blob = await fetch(url).then(res => res.blob());
  const reader = new window.FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = () => {
    res(reader.result);
  };
});

const makeContent = (feed, accounts) => {
  let previousTime = false;
  let previousFrom = null;
  const content = [];
  feed.items.forEach((msg) => {
    const newBlock = msg.accountId != previousFrom;
    previousFrom = msg.accountId;
    const showTime = previousTime ? (previousTime - msg.created > 60 * 60 * 24) : true;
    previousTime = msg.created;
    formatMessage(newBlock, feed.participants, showTime, msg, accounts, content);
  });
  return content;
};

// Might become async if fetching images into data b64?
const createPDF = (feed, accounts) => new Promise(async (res) => {
  const defaultFileName = feed.participants.map(p => accounts[p].fullName).join(' ');
  const docDefinition = cloneDeep(docBase);
  const content = makeContent(feed, accounts);
  const PromisesNeeded = content.filter(el => el.image);
  const bases64 = await Promise.all(PromisesNeeded.map(el => getBase64(el.image)));
  content.forEach((el) => {
    if (el.image) el.image = bases64.shift();
  });
  docDefinition.content = content;
  // console.log('PDF FINISHED',cloneDeep(docDefinition));
  // eslint-disable-next-line
  pdfMake.createPdf(docDefinition).download(defaultFileName,res);
});

export default createPDF;
