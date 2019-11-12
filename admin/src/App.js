import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard';

// Components
import AsideMenu from './components/AsideMenu';
import HeaderMenu from './components/HeaderMenu';
import DetailsMenu from './components/DetailsMenu';

// Services
import User from './services/User';

function App() {
  
  useEffect(() => {
    console.log("Main started");
    
    setTimeout(() => {
      User.setUserInfo({ nome: "Matheus", id: 1 });
      console.log("getUserInfo -> ", User.getUserInfo());
    }, 1000)
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <DetailsMenu />
        <HeaderMenu />
        <AsideMenu />
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/outro" exact component={Dashboard} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
