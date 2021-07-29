import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory} from "react-router-dom";

import Game from "./Game/Game";
import UserLogin from "./User/UserLogin";
import UserRegister from "./User/UserRegister";
import "./App.scss";
import API from '../api/request'


const App = () => {
  const history = useHistory();

  useEffect(() => {
    let userStorage = JSON.parse(String(localStorage.getItem('user')));
    if(!userStorage){
      if(history.location.pathname==='/play'){
        history.push('login')
      }
    }else{
      switch(userStorage.rol){
        case 'USER':
          history.push('/play')
          break;
      }
    }
  }, []);  

  return (
    <Switch>
      <Route exact path="/play" component={() => <Game  title={"Hi"}/>}></Route>
      <Route exact path="/login" component={UserLogin}></Route>
      <Route exact path="/register" component={UserRegister}></Route>
    </Switch>
  );
};

export default App;
