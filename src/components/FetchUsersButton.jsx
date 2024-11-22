import React from "react";

const FetchUsersButton = ({ onFetchUsers }) => {
  return (
    <button onClick={onFetchUsers} className="fetch-users-btn">
      Fetch Users
    </button>
  );
};

export default FetchUsersButton;
