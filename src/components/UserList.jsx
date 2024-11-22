import React from "react";

const UserList = ({ users, onDeleteUser }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="user-avatar"
          />
          <span>
            {user.first_name} {user.last_name} - {user.email}
          </span>
          <button onClick={() => onDeleteUser(user.id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
