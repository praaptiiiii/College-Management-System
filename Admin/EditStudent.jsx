import React, { useState } from "react";

const EditStudent = ({ onEdit }) => {
  const [editOption, setEditOption] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ option: editOption, value: newValue });
    setEditOption("");
    setNewValue("");
  };

  return (
    <div className="edit-student-details-page">
      <h2>Edit Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Detail to Edit:</label>
          <select
            value={editOption}
            onChange={(e) => setEditOption(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="name">Name</option>
            <option value="class">Class</option>
            <option value="section">Section</option>
            <option value="branch">Branch</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div className="form-group">
          <label>New Value:</label>
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="adminButton">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
