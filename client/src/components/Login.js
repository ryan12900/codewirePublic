import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login() {
    return (
        <div>
            <Form>
              <Form.Label>Login</Form.Label>
              <Form.Group controlId="formUsername">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="Username" placeholder="Enter Username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </div>
    );
}

export default Login;