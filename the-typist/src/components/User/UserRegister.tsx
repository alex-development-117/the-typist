import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import UnloggedBackground from "./UnloggedBackground";
import "./User.scss";
import { User } from "../../interfaces/user.interface";

const UserRegister = () => {
  const [newUser, setNewUser] = useState<User>({
    name: "",
    rol: "USER",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnChange = (event:any) => {
    switch(event.target){
      case 'user':

        break;
    }
  }

  return (
    <UnloggedBackground>
      <div className="container">
        <div className="header center">Register</div>
        <form className="content center flex-1">
          <div className="group">
            <label htmlFor="user">User</label>
            <input id="user" value={newUser.password} onChange={handleOnChange} type="text" />
          </div>
          <div className="group">
            <label htmlFor="password">Password</label>
            <input id="password" value={newUser.password} onChange={handleOnChange} type="text" />
          </div>
          <div className="group">
            <label htmlFor="confirmPassword">Confirm</label>
            <input id="confirmPassword" value={confirmPassword} onChange={handleOnChange} type="text" />
          </div>
        </form>
      </div>
    </UnloggedBackground>
  );
};

export default UserRegister;
