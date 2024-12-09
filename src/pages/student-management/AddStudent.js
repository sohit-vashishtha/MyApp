import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './addstudent.css'
const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    grade: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Added:', student);
    // Submit logic here
  };

  return (
    <div className="add-student">
      <h2>Add Student</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter student name"
            name="name"
            value={student.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter student email"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGrade">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter student grade"
            name="grade"
            value={student.grade}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Student
        </Button>
      </Form>
    </div>
  );
};

export default AddStudent;
