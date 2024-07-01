import React, { useState } from "react";
import LoginOptions from "./LoginOptions";
import AdminLogin from "./AdminLogin";
import TeacherLogin from "./TeacherLogin";
import StudentLogin from "./StudentLogin";

function App() {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const handleLoginClick = () => {
    setShowLoginOptions(true); // Update state to show LoginOptions component
  };

  const handleLoginOptionClick = (option) => {
    setCurrentPage(option);
  };

  const renderLoginPage = () => {
    switch (currentPage) {
      case "admin":
        return <AdminLogin />;
      case "teacher":
        return <TeacherLogin />;
      case "student":
        return <StudentLogin />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {!showLoginOptions && (
        <div className="landing-page">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctxmOVzXHd9M3WsKBxnngkqBGumGRGa2pqQ&usqp=CAU"
            alt="Education and Graduation Concept"
          />
          <div className="landing-page-text">
            <h1>Welcome to Sabka College</h1>
            <button onClick={handleLoginClick}>LOGIN</button>
          </div>
        </div>
      )}
      {showLoginOptions && !currentPage && (
        <LoginOptions handleLoginOptionClick={handleLoginOptionClick} />
      )}
      {currentPage && renderLoginPage()}
    </div>
  );
}

export default App;
