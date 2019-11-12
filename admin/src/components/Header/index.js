import React, { Fragment } from 'react';
import { FaCaretRight } from 'react-icons/fa';

import './style.scss';

/**
 * @param {text} title Titulo
 * @param {Array<string>} breadcrumb
 */
function Header({ title, breadcrumb }) {
  return (
    <div className="header-main">
      <h1>{title}</h1>
      <div className="breadcrumb">
        {breadcrumb && breadcrumb.map((crumb, index) => (
          <Fragment key={index}>
            <span>{crumb}</span>
            {breadcrumb.length-1 !== index && (<FaCaretRight />)}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Header;