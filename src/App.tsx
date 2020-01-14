import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ProfileContainer from './component/Profile/ProfileContainer';
import Users from './component/Users/Users';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import { Provider } from 'react-redux';
import { store } from "./redux/Store"
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/profile" render={()=><ProfileContainer/>} />
            <Route path="/users" render={()=><Users/>} />
            <Route path="/login" render={()=><Login/>} />
          </Switch>
          <span className= "item-a">
            <Header />
          </span>
          <span className= "item-b">
            <Navbar/>
          </span>
        </Provider>
      </BrowserRouter>
    </div>  
  );
}

export default App;
