import React, { useState } from "react";

const AddTeacher = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    classes: "",
    lectures: "",
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
      subject: "",
      classes: "",
      lectures: "",
    });
  };

  return (
    <div className="add-teacher-page">
      <h2>Add Teacher</h2>
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
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Classes:</label>
          <input
            type="text"
            name="classes"
            value={formData.classes}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Lectures:</label>
          <input
            type="text"
            name="lectures"
            value={formData.lectures}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTeacher;
