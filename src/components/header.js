import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">My App</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <li role="presentation"><Link to="/">Home</Link></li>
            <li role="presentation"><Link to="/addUser">Add User</Link></li>
        </Nav>
    </Navbar>
);

export default Header;
