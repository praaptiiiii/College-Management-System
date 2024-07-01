import React from "react";

function LoginOptions({ handleLoginOptionClick }) {
  return (
    <div className="login-options-page">
      <h1>Login Options</h1>
      <div className="login-buttons">
        <button onClick={() => handleLoginOptionClick("student")}>
          Student Login
        </button>
        <button onClick={() => handleLoginOptionClick("teacher")}>
          Teacher Login
        </button>
        <button onClick={() => handleLoginOptionClick("admin")}>
          Admin Login
        </button>
      </div>
    </div>
  );
}

export default LoginOptions;
