import React, { useState } from "react";
import Banner from './Banner';
import Bug from './Bug';

const ControlButtons = ({ api, subCompId }) => {

  return (
    <div>
      <Banner api={api} subCompId={subCompId} />
      <Bug api={api} subCompId={subCompId} />
    </div>
  );
};

export default ControlButtons;