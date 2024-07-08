import React, { useState } from "react";

const DeleteTeacher = ({ onDelete }) => {
  const [teacherId, setTeacherId] = useState("");
  const [teacherName, setTeacherName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDelete({ id: teacherId, name: teacherName });
    setTeacherId("");
    setTeacherName("");
  };

  return (
    <div className="delete-teacher-page">
      <h2>Delete Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Teacher ID:</label>
          <input
            type="text"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Teacher Name:</label>
          <input
            type="text"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="adminButton">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteTeacher;
