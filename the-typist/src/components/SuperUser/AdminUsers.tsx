import React, { useEffect, useState } from "react";
import API from "../../api/request";
import { User } from "../../interfaces/user.interface";
import UserCard from "./UserCard";
import "./AdminUser.scss";

const AdminUsers = () => {
  let [users, setUsers] = useState<User[]>();

  let asideMenuOptions = [
    {
      id: 0,
      icon: 'fas fa-users"',
      name: 'Admin Users'
    },
    {
      id: 1,
      icon: 'fas fa-users"',
      name: 'Admin Levels'
    },
    {
      id: 2,
      icon: 'fas fa-users"',
      name: 'Logout'
    }
  ];

  useEffect(() => {
    API.get(API.host, "/user/get").then((res) => {
      setUsers(res as unknown as User[]);
    });
  }, []);


  const mapAsideMenu = () => {
    return asideMenuOptions.map((option) => {
      return (
        <div key={option.name} className="option">
          
        </div>
      );
    })
  }

  return (
    <div className="full-screen center">
      <div className="aside-menu center">
        {mapAsideMenu()}
      </div>
      <div className="display-content">
        <div className="header admin center text-l">
          Admin interface
        </div>
        <div className="content admin center">
          <div className="users-container flex-1">
            {users && users.map((user) => <UserCard key={user.id} user={user} actualize={setUsers} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
