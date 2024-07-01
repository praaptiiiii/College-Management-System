import React, { useState } from "react";

function LoginForm({ title, onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onSubmit(username, password); // Call parent function with form data
  };

  return (
    <form className="login-form form-group" onSubmit={handleSubmit}>
      <h2>{title} Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
