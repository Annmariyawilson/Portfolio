import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa'; 
import './Footer.css'; 

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Information</h5>
            <p>
              <FaEnvelope /> <a href="mailto:annmariyawilson31@gmail.com">annmariyawilson31@gmail.com</a>
            </p>
            <p>
              <FaPhone /> +91 8301 921 926
            </p>
          </Col>
          <Col md={4}>
            <h5>Connect with Me</h5>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/annmariya-wilson" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Annmariyawilson" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://wa.me/918301921926" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Annmariya Wilson. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
