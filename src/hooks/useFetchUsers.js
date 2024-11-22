import { useState } from "react";
import { getUsers, deleteUser } from "../apiMethods";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setError(""); // Очистити попередні помилки
      const response = await getUsers();
      setUsers(response.data.data);
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

  return { users, fetchUsers, removeUser, error, clearError };
};

export default useFetchUsers;
