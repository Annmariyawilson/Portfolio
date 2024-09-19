import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contactus() {
  return (
    <section className="contactus">
      <Container>
        <h2>Contact Me</h2>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Control type="text" placeholder="Enter your name" className="form-input" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" placeholder="Enter your email" className="form-input" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" className="form-input" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contactus;
