import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Game from "./Game/Game";
import UserLogin from "./User/UserLogin";
import UserRegister from "./User/UserRegister";
import "./App.scss";

// REDUX
import store from "../store";
import { Provider } from "react-redux";
import AdminUsers from "./SuperUser/AdminUsers";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    let userStorage = JSON.parse(String(localStorage.getItem("user")));
    if (!userStorage) {
      if (false
        // history.location.pathname !== "/login"  &&
        // history.location.pathname !== "/register"
      ) {
        history.push("/login");
      }
    } else {
      switch (userStorage.rol) {
        case "USER":
          history.push("/play");
          break;
        case "ADMIN":
          history.push("/adminUsers");
          break;
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <Switch>
        <Route
          exact
          path="/play"
          component={() => <Game title={"Hi"} />}
        ></Route>
        <Route exact path="/login" component={UserLogin}></Route>
        <Route exact path="/register" component={UserRegister}></Route>
        <Route exact path="/adminUsers" component={AdminUsers}></Route>
      </Switch>
    </Provider>
  );
};

export default App;
