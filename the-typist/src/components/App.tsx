import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory} from "react-router-dom";

import Game from "./Game/Game";
import UserLogin from "./User/UserLogin";
import "./App.scss";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/play')
  }, []);

  return (
    <Switch>
      <Route exact path="/play" component={() => <Game  title={"Hi"}/>}></Route>
      <Route exact path="/login" component={UserLogin}></Route>
    </Switch>
  );
};

export default App;
