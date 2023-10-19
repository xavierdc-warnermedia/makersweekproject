import React, { useState } from "react";

const Banner = ({ api, subCompId }) => {
  const { Banner } = subCompId;
  const [toggle, setToggle] = useState('Out');

  const sendRequest = () => {
    console.log('making request');
    toggle === 'Out' ? setToggle('In') : setToggle('Out');

    const payload = 
      [
        {
          "subCompositionId": Banner,
          "state": toggle
        }
      ];

    fetch(api, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(data => console.log(data));

    console.log(`sent request to ${api}, using payload:\n${JSON.stringify(payload)}`);
  }

  return (
    <div>
      <button className='controlButton' onClick={() => sendRequest(Banner)}>Banner {toggle}</button>
    </div>
  );
};

export default Banner;