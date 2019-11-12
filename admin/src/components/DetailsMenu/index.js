import React, { useEffect } from 'react';

import User from './../../services/User';

import './style.scss';

function DetailsMenu() {

  useEffect(() => {
    console.log(User.getUserInfo());
  }, [])
  
  return (
    <div className="details"></div>
  )
}

export default DetailsMenu;