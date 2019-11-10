import React from 'react';
import './App.scss';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="details"></div>
      <header>
        <div className="user-info">
          <p>Admin</p>
          <div className="image"></div>
        </div>
      </header>
      <aside>
        <span>Geral</span>
        <ul>
          <li>
            <MdDashboard />
            Dashboard
          </li>
        </ul>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
