import React, { useEffect, useState } from "react";
import FetchUsersButton from "./FetchUsersButton";
import UserList from "./UserList";
import SearchBar from "./SearchBar";
import ErrorMessage from "./ErrorMessage";
import Pagination from "./Pagination";
import useFetchUsers from "../hooks/useFetchUsers";

const UserContainer = () => {
  const {
    users,
    fetchUsers,
    removeUser,
    currentPage,
    totalPages,
    setCurrentPage,
    error,
    clearError,
  } = useFetchUsers();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-container">
      <ErrorMessage message={error} onClose={clearError} />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FetchUsersButton onFetchUsers={() => fetchUsers(1)} />
      {filteredUsers.length > 0 ? (
        <>
          <UserList users={filteredUsers} onDeleteUser={removeUser} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
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
