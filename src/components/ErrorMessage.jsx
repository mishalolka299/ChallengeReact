import React from "react";

const ErrorMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="error-message">
      <span>{message}</span>
      <button onClick={onClose} className="close-error-btn">
        ×
      </button>
    </div>
  );
};

export default ErrorMessage;
