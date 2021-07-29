import React, { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import API from '../../api/request'

import "./User.scss";
import UnloggedBackground from './UnloggedBackground';

const UserLogin = (props: any) => {
    const history = useHistory();
    const [user, setUser] = useState({name: '', password: ''});


    const submitUser = async (e:any) => {
        e.preventDefault();
        if(user.name.length > 0 && user.password.length > 0){
            API.post(API.host, '/user/login', user).then( res => {
                let user = JSON.parse(JSON.stringify(res));
                if(user.authenticated){
                    localStorage.setItem('user', JSON.stringify(user[0]));
                    history.push('/play');
                }
            })
        }
    }

    const handleOnClickRegister = () => {
        history.push('/register')
    }

    const handleChange = (event:any) => {
        switch(event.target.id){
            case 'user': 
                setUser({
                    ...user,
                    name: event.target.value
                });
                break;
            case 'password': 
            setUser({
                ...user,
                password: event.target.value
            });
            break;
        }
    }

    return (
        <UnloggedBackground>
            <div className="container">
                <div className="header center">
                    Login
                </div>
                <form className="content center flex-1">
                    <div className="group">
                        <label htmlFor="user">User</label>
                        <input id="user" type="text" value={user.name} onChange={handleChange}/>
                    </div>
                    <div className="group">
                        <label htmlFor="user">Password</label>
                        <input id="password" type="password" value={user.password} onChange={handleChange}/>
                    </div>
                    <div id="register-p" style={{display: 'flex'}}>You dont have an account? <div onClick={handleOnClickRegister} className="link"> Register here.</div></div>
                    <button type="submit" onClick={submitUser}>Login</button>
                </form>
            </div>
        </UnloggedBackground>
    );
};

export default UserLogin;
