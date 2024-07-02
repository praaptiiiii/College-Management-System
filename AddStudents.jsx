import React from "react";
import PersonForm from "./PersonForm";

const AddStudents = () => {
  const handleAddStudent = (formData) => {
    // Handle add student logic
    console.log("Adding student:", formData);
  };

  return (
    <div className="add-students">
      <PersonForm personType="Student" onSubmit={handleAddStudent} />
    </div>
  );
};

export default AddStudents;
