import React, { useState } from "react";

const Bug = ({ api, subCompId }) => {
  const { Bug } = subCompId;
  const [toggle, setToggle] = useState('Out');

  const sendRequest = () => {
    console.log('making request');
    toggle === 'Out' ? setToggle('In') : setToggle('Out');

    const payload = 
      [
        {
          "subCompositionId": Bug,
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
      <button className='controlButton' onClick={() => sendRequest(Bug)}>Bug {toggle}</button>
    </div>
  );
};

export default Bug;