import React,{useState} from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';
const Header = ({ toggleSidebar,isOpen }) => {
    
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    
      
    {!isOpen && (
        <Navbar.Brand href="#">CRM Dashboard</Navbar.Brand>
      )}
        <button className="hamburger-icon" onClick={toggleSidebar}>
          <List size={30} />
        </button>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="#">Notifications</Nav.Link>
            </Nav.Item>
            <Nav.Item className='profile'>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="user-dropdown">
                  <i className="bi bi-person-circle"></i> User
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Profile</Dropdown.Item>
                  <Dropdown.Item href="#">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
};

export default Header;
