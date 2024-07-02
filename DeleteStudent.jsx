import React, { useState } from "react";

const DeleteStudent = ({ onDelete }) => {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDelete({ id: studentId, name: studentName });
    setStudentId("");
    setStudentName("");
  };

  return (
    <div className="delete-student-page">
      <h2>Delete Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student ID:</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteStudent;
