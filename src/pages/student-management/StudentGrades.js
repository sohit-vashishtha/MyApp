import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import './studentGrades.css'

const StudentGrades = () => {
  const [grades, setGrades] = useState([
    { subject: 'Math', grade: 'A' },
    { subject: 'Science', grade: 'B' },
    { subject: 'English', grade: 'A' },
  ]);

  return (
    <div className="student-grades">
      <h2>Student Grades</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.subject}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className="mt-4">Add Grade</h4>
      <Form>
        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" />
        </Form.Group>
        <Form.Group controlId="formGrade">
          <Form.Label>Grade</Form.Label>
          <Form.Control type="text" placeholder="Enter grade" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Grade
        </Button>
      </Form>
    </div>
  );
};

export default StudentGrades;
