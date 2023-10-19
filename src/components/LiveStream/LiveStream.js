import React from "react";
import './livestream.css';

const LiveStream = () => {
  const address = 'https://app.singular.live/output/3GF39ozicKphl7iXF57QkC/Output?aspect=16:9';

  return (
    <div className='live-stream'>
      <iframe title='live' src={address}>
      </iframe>
        Live Stream
    </div>
  )
};

export default LiveStream;