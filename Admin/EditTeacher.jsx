import React, { useState } from "react";

const EditTeacher = () => {
  const [teacherId, setTeacherId] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [lectures, setLectures] = useState([]);

  // Function to fetch teacher data based on ID
  const fetchTeacherData = async () => {
    try {
      // Replace with actual API call or data fetch logic
      const response = await fetch(`/api/teachers/${teacherId}`);
      const data = await response.json();

      // Assuming data structure includes subjects and lectures
      setTeacherName(data.name);
      setSubjects(data.subjects);
      setLectures(data.lectures);
    } catch (error) {
      console.error("Error fetching teacher data:", error);
      // Handle error state or display a message
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, possibly update teacher details
    console.log(
      "Submitting form with ID:",
      teacherId,
      "and name:",
      teacherName
    );
    // Example: API call to update teacher details
  };

  return (
    <div className="edit-teacher">
      <h2>Edit Teacher Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="teacherId">Teacher ID:</label>
          <input
            type="text"
            id="teacherId"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="teacherName">Teacher Name:</label>
          <input
            type="text"
            id="teacherName"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            required
          />
        </div>
        <div className="current-data">
          <h3>Current Subjects:</h3>
          <ul>
            {subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <h3>Current Lectures:</h3>
          <ul>
            {lectures.map((lecture, index) => (
              <li key={index}>{lecture}</li>
            ))}
          </ul>
        </div>
        <button type="submit" className="adminButton">
          Save Changes
        </button>
      </form>
      <button onClick={fetchTeacherData}>Fetch Teacher Data</button>
    </div>
  );
};

export default EditTeacher;
