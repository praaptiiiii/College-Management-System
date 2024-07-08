import React, { useState } from "react";

const AddStudent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    section: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      class: "",
      section: "",
      branch: "",
      year: "",
    });
  };

  return (
    <div className="add-student-page">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Class:</label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Section:</label>
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Branch:</label>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <button className="adminButton" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
