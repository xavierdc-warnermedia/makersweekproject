import React from "react";
import './livestream.css';

const LiveStream = ({liveStreamAddress, SingularAddress}) => {

  return (
    <div className='live-stream'>
      <iframe class='stream' title='live' src={liveStreamAddress} autoplay='autoplay'>Test
      </iframe>
      {/* <iframe class='overlay' title='overlay' src={SingularAddress}>
      </iframe> */}
        Live Stream
    </div>
  )
};

export default LiveStream;