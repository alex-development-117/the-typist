import React, { useEffect, useState } from "react";
import API from "../../api/request";
import { User } from "../../interfaces/user.interface";
import UserCard from "./UserCard";
import "./AdminUser.scss";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


const AdminUsers = () => {
  const history = useHistory();
  const [users, setUsers] = useState<User[]>();
  const [optionSelected, setOptionSelected] = useState<number>(0);
  const asideMenuOptions = [
    {
      id: 0,
      icon: "fas fa-users",
      name: "Admin Users",
    },
    {
      id: 1,
      icon: "fas fa-gamepad",
      name: "Admin Levels",
    },
    {
      id: 2,
      icon: "fas fa-door-open",
      name: "Logout",
    },
  ];

  useEffect(() => {
    API.get(API.host, "/user/get").then((res) => {
      setUsers(res as unknown as User[]);
    });
  }, []);

  const mapAsideMenu = () => {
    return asideMenuOptions.map((option) => {
      return (
        <div
          key={option.name}
          onClick={() => setOptionSelected(option.id)}
          className={`option ${option.id === optionSelected ? "active" : ""}`}
        >
          <i className={`icon ${option.icon} center`}></i>
          <div className="title center">{option.name}</div>
        </div>
      );
    });
  };

  const adminUsersOrLevels = () => {
    switch (optionSelected) {
      case 0:
        return (
          <div className="users-container flex-1">
            {users &&
              users.map((user) => (
                <UserCard key={user.id} user={user} actualize={setUsers} />
              ))}
          </div>
        );
      case 1:
        break;
      case 2:
        localStorage.removeItem('user');
        history.push('/login');
        break;
      default:
        toast.error('This option is not available');
        break;
    }
  };

  return (
    <div className="full-screen center">
      <div className="aside-menu">{mapAsideMenu()}</div>
      <div className="display-content">
        <div className="header admin center text-l">
          {asideMenuOptions[optionSelected].name}
        </div>
        <div className="content admin center">{adminUsersOrLevels()}</div>
      </div>
    </div>
  );
};

export default AdminUsers;
