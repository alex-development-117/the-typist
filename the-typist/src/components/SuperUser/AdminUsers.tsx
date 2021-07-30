import React, {useEffect, useState} from "react";
import API from "../../api/request";
import { User } from '../../interfaces/user.interface';
import UserCard from './UserCard';
import './AdminUser.scss'

const AdminUsers = () => {
    let [users, setUsers] = useState<User[]>();
    useEffect(()=> {
        console.log("Component mounted");
        API.get(API.host, '/user/get').then((res) => {            
            setUsers(res as unknown as User[])
        });
    }, []);

    const mapUsers = () => {
        if(users){
            const userRenders = users.map((user) => {
                return (
                    <UserCard key={user.id} user={user}/>
                );
            })
            return userRenders;
        }
    }

    return (
        <div className="full-screen center">
            <div className="users-container flex-1">
                {mapUsers()}
            </div>
        </div>
    );
};

export default AdminUsers;
