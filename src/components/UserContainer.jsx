import React, { useState } from "react";
import FetchUsersButton from "./FetchUsersButton";
import UserList from "./UserList";
import SearchBar from "./SearchBar";
import ErrorMessage from "./ErrorMessage";
import useFetchUsers from "../hooks/useFetchUsers";

const UserContainer = () => {
  const { users, fetchUsers, removeUser, error, clearError } = useFetchUsers();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-container">
      <ErrorMessage message={error} onClose={clearError} />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FetchUsersButton onFetchUsers={fetchUsers} />

      {filteredUsers.length > 0 ? (
        <UserList users={filteredUsers} onDeleteUser={removeUser} />
      ) : (
        <p className="no-users-message">
          {users.length > 0
            ? "Нікого не знайдено"
            : "Користувачі ще не завантажені."}
        </p>
      )}
    </div>
  );
};

export default UserContainer;
