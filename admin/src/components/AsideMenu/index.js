import React from 'react';
import { FaChartLine, FaUserAlt } from 'react-icons/fa';

import './style.scss';

function AsideMenu() {
  return (
    <aside>
      <span>Geral</span>
      <ul>
        <li className="active">
          <FaChartLine />
          Dashboard
        </li>
        <li>
          <FaUserAlt />
          Dashboard
        </li>
      </ul>
    </aside>
  )
}

export default AsideMenu;