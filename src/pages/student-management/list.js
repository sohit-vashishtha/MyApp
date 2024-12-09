import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './student.css'

const StudentList = () => {
  const students = [
    { id: 1, name: 'John Doe', grade: 'A', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', grade: 'B', email: 'jane.smith@example.com' },
    { id: 3, name: 'Mark Johnson', grade: 'A', email: 'mark.johnson@example.com' },
    // Add more student data here
  ];

  return (
    <div className="student-list">     
      <Table   hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.email}</td>
              <td>
                <Button  className="btn mx-2 mr-2">Edit</Button>
                <Button variant='danger' className='danger'>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
