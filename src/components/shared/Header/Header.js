import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='nav' expand="lg">
                <Container>
                    <Navbar.Brand className="" href="#home">Login System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="px-4 mr-4 leader-board" href="#home">LeaderBoard</Nav.Link>
                            <Nav.Link className="login-nav px-4" href="#link">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;