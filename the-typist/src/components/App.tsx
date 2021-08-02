import React, {useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      if (history.location.pathname !== "/login"  &&
          history.location.pathname !== "/register"
      ) {
        history.push("/login");
      }
    } else {
      const PATH = userStorage.rol==='USER'?'/play':'adminUsers';
      history.push(PATH);
    }
  }, [history]);

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
      <ToastContainer/>
    </Provider>
  );
};

export default App;
