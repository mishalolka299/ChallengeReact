import React, { useState } from "react";
import FetchUsersButton from "./FetchUsersButton";
import UserList from "./UserList";
import SearchBar from "./SearchBar";
import useFetchUsers from "../hooks/useFetchUsers";

const UserContainer = () => {
  const { users, fetchUsers, removeUser } = useFetchUsers();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-container">
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FetchUsersButton onFetchUsers={fetchUsers} />
      <UserList users={filteredUsers} onDeleteUser={removeUser} />
    </div>
  );
};

export default UserContainer;
