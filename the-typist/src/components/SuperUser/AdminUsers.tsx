import React, { useEffect, useState } from "react";
import API from "../../api/request";
import { User } from "../../interfaces/user.interface";
import UserCard from "./UserCard";
import "./AdminUser.scss";

const AdminUsers = () => {
  let [users, setUsers] = useState<User[]>();
  useEffect(() => {
    API.get(API.host, "/user/get").then((res) => {
      setUsers(res as unknown as User[]);
    });
  }, []);

  const mapUsers = () => {
    if (users) {
      const userRenders = users.map((user) => {
        return <UserCard key={user.id} user={user} actualize={setUsers} />;
      });
      return userRenders;
    }
  };

  return (
    <div className="full-screen center flex-1">
      <div className="header center text-l">Admin interface</div>
      <div className="content center">
        <div className="users-container flex-1">{mapUsers()}</div>
      </div>
    </div>
  );
};

export default AdminUsers;
