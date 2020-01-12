import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Profile from './component/Profile/Profile';
import Users from './component/Users/Users';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/profile" render={()=><Profile/>} />
          <Route path="/users" render={()=><Users/>} />
          <Route path="/login" render={()=><Login/>} />
        </Switch>
        <span className= "item-a">
          <Header />
        </span>
        <span className= "item-b">
          <Navbar/>
        </span>
      </BrowserRouter>
    </div>  
  );
}

export default App;
