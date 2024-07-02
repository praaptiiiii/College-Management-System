import React, { useState } from "react";

const PersonForm = ({ personType, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
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
    // Pass the form data to the parent component for handling
    onSubmit(formData);
    // Optionally, you can clear the form fields after submission
    setFormData({
      name: "",
      subject: "",
      class: "",
      section: "",
      branch: "",
      year: "",
    });
  };

  return (
    <div className="person-form">
      <h2>{`Add ${personType}`}</h2>
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
        {personType === "Student" && (
          <>
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
          </>
        )}
        {personType === "Teacher" && (
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
        )}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PersonForm;
