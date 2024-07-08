import React, { useState } from "react";
import StudentDashboard from "./Dashboard/StudentDashboard";
import TeacherDashboard from "./Dashboard/TeacherDashboard";
import AdminDashboard from "./Dashboard/AdminDashboard";

function LoginForm({ title, onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Perform login logic here, e.g., authentication check
    if (username && password) {
      setIsLoggedIn(true);
    }
  };
  if (isLoggedIn) {
    //return <StudentDashboard />;
    //return <TeacherDashboard />;
    return <AdminDashboard />;
  }
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
