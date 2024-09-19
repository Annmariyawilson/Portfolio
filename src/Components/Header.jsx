import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'; 

function Header() {
  const text = "PORTFOLIO";
  return (
    <Navbar className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="navbar-brand-custom">
          {text}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
