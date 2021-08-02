import React, {useState } from "react";
import UnloggedBackground from "./UnloggedBackground";
import "./User.scss";
import { User } from "../../interfaces/user.interface";
import API from "../../api/request";
import { useHistory } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserRegister = () => {
  const history = useHistory();

  const [newUser, setNewUser] = useState<User>({
    name: "",
    rol: "USER",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleOnChange = (event: any) => {

    switch (event.target.id) {
      case "user":
        setNewUser({
          ...newUser,
          name: event.target.value,
        });
        break;
      case "password":
        setNewUser({
          ...newUser,
          password: event.target.value,
        });
        break;
      case "confirmPassword":
        setConfirmPassword(event.target.value);
        break;
    }
  };

  const handleOnClick = (event: any) => {
    event.preventDefault();
    if((newUser.name.length && newUser.password.length) > 0 && (newUser.password === confirmPassword)){
      API.post(API.host, '/user/post', newUser).then( res => {
        let response = JSON.parse(JSON.stringify(res));
        if(response.errorMessage){
          toast.error(response.errorMessage);
        }else{
          toast.success("User created successfully");
          localStorage.setItem('user', JSON.stringify(newUser));
          history.push('/play');
        }
      });
    }
  };

  return (
    <UnloggedBackground>
      <div className="container">
        <div className="header center">Register</div>
        <form className="content center flex-1">
          <div className="group">
            <label htmlFor="user">User</label>
            <input
              id="user"
              value={newUser.name}
              onChange={handleOnChange}
              type="text"
            />
          </div>
          <div className="group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={newUser.password}
              onChange={handleOnChange}
              type="password"
            />
          </div>
          <div className="group">
            <label htmlFor="confirmPassword">Confirm</label>
            <input
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              type="password"
            />
          </div>
          <button onClick={handleOnClick}>Create account</button>
        </form>
      </div>
    </UnloggedBackground>
  );
};

export default UserRegister;
