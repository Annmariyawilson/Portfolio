import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FaLock, FaCalculator, FaGlobe, FaCloud, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMysql } from 'react-icons/si';
import './Works.css'; 

function Works() {
  return (
    <section className="works">
      <Container>
        <h2 className="text-center mb-4">My Works</h2>
        
        <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
          <Col className="d-flex justify-content-center">
            <Card className="work-card text-center">
              <Card.Body>
                <FaLock size={50} className="mb-3" />
                <Card.Title>Online Locker Management System</Card.Title>
                <Card.Text>
                  A secure online system for managing lockers with features like appointment scheduling, rent deduction, and efficient allocation. Built using C#, ASP.NET, and Microsoft SQL Server.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card className="work-card text-center">
              <Card.Body>
                <FaCalculator size={50} className="mb-3" />
                <Card.Title>BMI Calculator</Card.Title>
                <Card.Text>
                  A responsive web application for calculating Body Mass Index (BMI) with user input validation and health categorization. Developed using React, HTML5, CSS, and Bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card className="work-card text-center">
              <Card.Body>
                <FaGlobe size={50} className="mb-3" />
                <Card.Title>Portfolio Website</Card.Title>
                <Card.Text>
                  A personal portfolio website to showcase my projects, skills, and experiences. Designed with a modern and responsive layout using React and Bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card className="work-card text-center">
              <Card.Body>
                <FaCloud size={50} className="mb-3" />
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                  A weather forecasting application that provides real-time weather data and forecasts. Integrated with third-party APIs and built using React and Node.js.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <section id="education" className="education-section mt-5">
          <h2 className="text-center mb-4">Education</h2>
          <Row xs={1} md={3} className="g-4 justify-content-center">
            <Col>
              <Card className="education-card text-center h-100">
                <Card.Body>
                  <Card.Title>Bachelor of Computer Application (BCA)</Card.Title>
                  <Card.Text>
                    Kannur University
                    <br />
                    <strong>2021-2024</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="education-card text-center h-100">
                <Card.Body>
                  <Card.Title>Higher Secondary Education</Card.Title>
                  <Card.Text>
                    St.Judes Higher Secondary School 
                    <br />
                    <strong>2019-2021</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="education-card text-center h-100">
                <Card.Body>
                  <Card.Title>MEA(R)N Stack Web Development intern
                  </Card.Title>
                  <Card.Text>
                  Luminar Technolab Calicut
                  <br />
                    <strong>2024</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <div className="skills-section text-center mt-5 mb-5">
          <Row className="g-4 justify-content-center">
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <FaHtml5 size={50} title="HTML5" />
            </Col>
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <FaCss3Alt size={50} title="CSS3" />
            </Col>
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <FaJs size={50} title="JavaScript" />
            </Col>
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <FaBootstrap size={50} title="Bootstrap" />
            </Col>
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <SiC size={50} title="C" />
            </Col>
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <SiCplusplus size={50} title="C++" />
            </Col>
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <SiMysql size={50} title="MySQL" />
            </Col>
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <FaJava size={50} title="Java" />
            </Col>
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <FaPython size={50} title="Python" />
            </Col>
            <Col xs={4} sm={3} md={2} className="skill-icon">
              <FaGitAlt size={50} title="Git" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Works;
