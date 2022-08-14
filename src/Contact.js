import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css';

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      method="POST"
      action="https://formsubmit.co/lawankaraditya@gmail.com"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>
          <h5 className="h5-text">Email address</h5>
        </Form.Label>
        <Form.Control type="email" placeholder="name@email.com" required />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email id.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          <h5 className="h5-text">Message</h5>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Type a message here"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter a message.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="justify-content-center d-flex">
        <Button variant="light" className="submit-btn" type="submit">
          <h5 className="h5-text">Submit</h5>
        </Button>
      </Form.Group>
    </Form>
  );
}

function Contact() {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} className="contact" id="contact-me">
          <h1>Contact me</h1>
          <Row>
            <Col sm={{ span: 10, offset: 1 }}>
              <ContactForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
