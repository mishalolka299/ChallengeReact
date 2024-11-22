import { useState } from "react";
import { getUsers, deleteUser } from "../apiMethods";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState("");

  const fetchUsers = async (page = 1) => {
    try {
      setError("");
      const response = await getUsers(page);
      console.log(response.data);
      setUsers(response.data.data);
      setCurrentPage(response.data.page);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      setError("Failed to fetch users. Please try again.");
      console.error("Fetch Users Error:", error);
    }
  };

  const removeUser = async (userId) => {
    try {
      setError("");
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      setError("Failed to delete user. Please try again.");
      console.error("Delete User Error:", error);
    }
  };

  const clearError = () => setError("");

  return {
    users,
    fetchUsers,
    removeUser,
    currentPage,
    totalPages,
    setCurrentPage,
    error,
    clearError,
  };
};

export default useFetchUsers;
