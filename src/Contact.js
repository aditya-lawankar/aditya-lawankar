import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css';

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();

      try {
        const response = await fetch(
          'https://formsubmit.co/ajax/ca6c6b792dfcb093a289a31bdc159c90',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              email,
              message,
            }),
          }
        );

        const data = await response.json();
        console.log(data);
        setIsSubmitted(true);
      } catch (err) {
        console.log(err);
      }
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="Enter email id">
        <Form.Label>
          <h5 className="h5-text">Email address</h5>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="name@email.com"
          // onChange={onInput}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          // value={firstName}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email id.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Enter a message">
        <Form.Label>
          <h5 className="h5-text">Message</h5>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Type a message here"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter a message.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="justify-content-center d-flex">
        <Button
          variant="light"
          className="submit-btn"
          type="submit"
          disabled={isSubmitted} // disable the button when the form is already submitted
        >
          {isSubmitted ? ( // render "Done" text when the form is submitted
            <h5 className="h5-text">Done!</h5>
          ) : (
            <h5 className="h5-text">Submit</h5>
          )}
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
