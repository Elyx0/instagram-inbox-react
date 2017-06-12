import React from 'react';
import moment from 'moment';
import {
  MessageWrapper,
  MediaWrapper,
  AvatarWrapper,
  TextWrapper,
  TimeWrapper,
  TimeHover,
  MediaShare,
  MediaCaption,
  MediaImage,
} from '../styles/styles-message.js';

const Message = ({participants,showTime, msg, accounts}) => {
    let { accountId, created, id, actionLog, mediaShare, text, type, media} = msg;
    if (type == 'placeholder') text = "[Content Unavailable]"
    const isMe = !~participants.indexOf(accountId);
    return (<MessageWrapper me={isMe}>

      { showTime && <TimeWrapper>{moment(msg.created).format('MM/DD/YYYY')}</TimeWrapper>}

      { actionLog && <TimeWrapper>{actionLog.description}</TimeWrapper>}

      { !isMe && <AvatarWrapper url={accounts[accountId].picture} /> }

      { mediaShare && <MediaShare>
        { mediaShare.caption && <MediaCaption>{mediaShare.caption}</MediaCaption>}
        { mediaShare.images && <MediaWrapper
          mW={mediaShare.images[0].width}
          mH={mediaShare.images[0].height}
          url={mediaShare.images[0].url}
          href={mediaShare.webLink}
          ></MediaWrapper>}
      </MediaShare>}

      { media && media.map((m,i) => <MediaWrapper key={i} allowMargins round
                    mW={m.width}
                    mH={m.height}
                    href={m.url}
                    target="_blank" url={m.url}></MediaWrapper>)}

      { text && <TextWrapper type={type} me={isMe}>{text}</TextWrapper>}
                <TimeHover>{moment(msg.created).format('hh:mm A')}</TimeHover>
    </MessageWrapper>)
  }
export default Message;
