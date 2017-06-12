import React from 'react';

const InboxAvatar = ({ feedId, urls }) => {
  const h = 55;
  const w = 55; //55
  const center = [h/2,w/2];
  const r = h/2;
  const angle = Math.PI*2/urls.length;
  //let start = 0;
  return(
    <svg style={{borderRadius:'50%'}} height={h} width={w}>
    <defs>
      { urls.map((url, i) => (
        <pattern key={i} id={feedId + '_' + i} height="100%" width="100%"
                     >
         <image xlinkHref={url.replace('http://','https://')} preserveAspectRatio="xMinYMid slice"
                width={h*(urls.length > 1 ? 1.3 : 1)} height={h*(urls.length > 1 ? 1.3 : 1)}/>
      </pattern>))}

    </defs>
  <circle cx = "50%" cy = "50%" r="50%" fill={`url(#${feedId}_0)`}/>
  { urls.length > 1 && urls.map((_,i) => {
    const start = [r+w*Math.cos(angle*i),r+w*Math.sin(angle*i)];
    //const oppo = [r+w*Math.cos(angle*i+angle*i/2),r+w*Math.sin(angle*i+angle*i/2)];
    const next =  [r+w*Math.cos(angle*(i+1)),r+w*Math.sin(angle*(i+1))]
    const points = [center,start,next].map(x => x.join(' ')).join();
    //start = next;
    return <polygon key={i} points={points} fill={`url(#${feedId + '_' + i})`} />
  }) }
    </svg>
  );

};

export default InboxAvatar;
