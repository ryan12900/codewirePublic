import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function SignupInsurance() {
    return (
       <div>
            <Form>
              <Form.Label>Signup</Form.Label>
              <Form.Group controlId="formCompanyName">
                  <Form.Label>Insurance Company Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter Insurance Company Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
    </div>
    );
}

export default SignupInsurance;