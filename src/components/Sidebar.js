import React, { useState } from 'react';
import '../styles/sidebar.css';  // Import the CSS
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For navigation between pages
// Icons for sidebar
import {
    FaHome,
    FaUsers,
    FaBook,
    FaChalkboardTeacher,
    FaCalendarAlt,
    FaMoneyBillAlt,
    FaPenSquare,
    FaLaptop,
    FaEnvelope,
    FaClipboardList,
    FaUserTie,
    FaCaretDown,
    FaCaretUp,
  } from 'react-icons/fa';// Icons for sidebar

const Sidebar = ({ isOpen }) => {
  // Single state to track the currently open menu
  const [openMenu, setOpenMenu] = useState(null);

  // Toggle the submenu visibility by setting the openMenu state
  const toggleMenu = (menu) => {
    // If the clicked menu is already open, close it; else open the clicked menu
    if (openMenu === menu) {
      setOpenMenu(null); // Close the submenu if it's already open
    } else {
      setOpenMenu(menu); // Open the clicked submenu and close others
    }
  };
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Nav className="flex-column">
        <Nav.Item>
          <Link to="/" className="nav-link">
            <FaHome /> Dashboard
          </Link>
        </Nav.Item>

        <Nav.Item>
          <div className="nav-link" onClick={() => toggleMenu('studentManagement')}>
            <FaUsers /> Student Management
            {openMenu === 'studentManagement' ? <FaCaretUp className="submenu-icon" /> : <FaCaretDown className="submenu-icon" />}
          </div>
          {openMenu === 'studentManagement' && (
            <Nav className="sub-menu">
              <Nav.Item>
                <Link to="/student-management/list" className="nav-link">List Students</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/student-management/add" className="nav-link">Add Student</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/student-management/grades" className="nav-link">Student Grades</Link>
              </Nav.Item>
            </Nav>
          )}
        </Nav.Item>

        {/* Attendance Management Menu with Submenu */}
        <Nav.Item>
          <div className="nav-link" onClick={() => toggleMenu('attendanceManagement')}>
            <FaCalendarAlt /> Attendance Management
            {openMenu === 'attendanceManagement' ? <FaCaretUp className="submenu-icon" /> : <FaCaretDown className="submenu-icon" />}
          </div>
          {openMenu === 'attendanceManagement' && (
            <Nav className="sub-menu">
              <Nav.Item>
                <Link to="/attendance-management/mark" className="nav-link">Mark Attendance</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/attendance-management/report" className="nav-link">Attendance Report</Link>
              </Nav.Item>
            </Nav>
          )}
        </Nav.Item>

        {/* Examination and Grading Menu with Submenu */}
        <Nav.Item>
          <div className="nav-link" onClick={() => toggleMenu('examinationGrading')}>
            <FaPenSquare /> Examination & Grading
            {openMenu === 'examinationGrading' ? <FaCaretUp className="submenu-icon" /> : <FaCaretDown className="submenu-icon" />}
          </div>
          {openMenu === 'examinationGrading' && (
            <Nav className="sub-menu">
              <Nav.Item>
                <Link to="/examination-grading/schedule" className="nav-link">Examination Schedule</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/examination-grading/results" className="nav-link">View Results</Link>
              </Nav.Item>
            </Nav>
          )}
        </Nav.Item>

        {/* Fee Management Menu with Submenu */}
        <Nav.Item>
          <div className="nav-link" onClick={() => toggleMenu('feeManagement')}>
            <FaMoneyBillAlt /> Fee Management
            {openMenu === 'feeManagement' ? <FaCaretUp className="submenu-icon" /> : <FaCaretDown className="submenu-icon" />}
          </div>
          {openMenu === 'feeManagement' && (
            <Nav className="sub-menu">
              <Nav.Item>
                <Link to="/fee-management/invoice" className="nav-link">Invoices</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/fee-management/transactions" className="nav-link">Fee Transactions</Link>
              </Nav.Item>
            </Nav>
          )}
        </Nav.Item>

        {/* Timetable Management Menu with Submenu */}
        <Nav.Item>
          <div className="nav-link" onClick={() => toggleMenu('timetableManagement')}>
            <FaClipboardList /> Timetable Management
            {openMenu === 'timetableManagement' ? <FaCaretUp className="submenu-icon" /> : <FaCaretDown className="submenu-icon" />}
          </div>
          {openMenu === 'timetableManagement' && (
            <Nav className="sub-menu">
              <Nav.Item>
                <Link to="/timetable-management/view" className="nav-link">View Timetable</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/timetable-management/add" className="nav-link">Add Timetable</Link>
              </Nav.Item>
            </Nav>
          )}
        </Nav.Item>

        {/* Communication Tools Menu with Submenu */}
        <Nav.Item>
          <div className="nav-link" onClick={() => toggleMenu('communicationTools')}>
            <FaEnvelope /> Communication Tools
            {openMenu === 'communicationTools' ? <FaCaretUp className="submenu-icon" /> : <FaCaretDown className="submenu-icon" />}
          </div>
          {openMenu === 'communicationTools' && (
            <Nav className="sub-menu">
              <Nav.Item>
                <Link to="/communication-tools/messages" className="nav-link">Messages</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/communication-tools/announcements" className="nav-link">Announcements</Link>
              </Nav.Item>
            </Nav>
          )}
        </Nav.Item>

        {/* Library Management Menu with Submenu */}
        <Nav.Item>
          <div className="nav-link" onClick={() => toggleMenu('libraryManagement')}>
            <FaBook /> Library Management
            {openMenu === 'libraryManagement' ? <FaCaretUp className="submenu-icon" /> : <FaCaretDown className="submenu-icon" />}
          </div>
          {openMenu === 'libraryManagement' && (
            <Nav className="sub-menu">
              <Nav.Item>
                <Link to="/library-management/books" className="nav-link">Books</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/library-management/borrow" className="nav-link">Borrow Books</Link>
              </Nav.Item>
            </Nav>
          )}
        </Nav.Item>

        {/* Human Resources Menu with Submenu */}
        <Nav.Item>
          <div className="nav-link" onClick={() => toggleMenu('humanResources')}>
            <FaUserTie /> Human Resources
            {openMenu === 'humanResources' ? <FaCaretUp className="submenu-icon" /> : <FaCaretDown className="submenu-icon" />}
          </div>
          {openMenu === 'humanResources' && (
            <Nav className="sub-menu">
              <Nav.Item>
                <Link to="/human-resources/staff" className="nav-link">Staff</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/human-resources/payroll" className="nav-link">Payroll</Link>
              </Nav.Item>
            </Nav>
          )}
        </Nav.Item>

        {/* Payout Menu with Submenu */}
        <Nav.Item>
          <div className="nav-link" onClick={() => toggleMenu('payout')}>
            <FaMoneyBillAlt /> Payout
            {openMenu === 'payout' ? <FaCaretUp className="submenu-icon" /> : <FaCaretDown className="submenu-icon" />}
          </div>
          {openMenu === 'payout' && (
            <Nav className="sub-menu">
              <Nav.Item>
                <Link to="/payout/salary" className="nav-link">Salary Payout</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/payout/fees" className="nav-link">Fee Payout</Link>
              </Nav.Item>
            </Nav>
          )}
        </Nav.Item>
      </Nav>


      
    </div>
  );
};

export default Sidebar;

