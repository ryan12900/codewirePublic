import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function Signup() {
    return (
       <div>
            <Form>
              <Form.Label>Signup</Form.Label>
              <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter first name" />
              </Form.Group>
              <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter last name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <DropdownButton id="Insurance Company" title="Insurance Company">
                    <Dropdown.Item as="button">Option 1</Dropdown.Item>
                    <Dropdown.Item as="button">Option 2</Dropdown.Item>
                    <Dropdown.Item as="button">Other</Dropdown.Item>
                </DropdownButton>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </div>
    );
}

export default Signup;