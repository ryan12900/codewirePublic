import React from 'react';
import {Link} from "react-router-dom";
import {Container, Form} from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";

function Home() {
    const options = [
        { key: 'a', text: 'Agent', value: 'agent' },
        { key: 'c', text: 'Customer', value: 'customer' },
    ];

    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Register</h1>
                    </Card.Header>
                    <Card.Description >
                        <Form style={styles.form}>
                            <Form.Field>
                                <label>First Name</label>
                                <input required name={'firstName'} placeholder='John' />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input required name={'lastName'} placeholder='Doe' />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input required name={'email'} type={'email'} placeholder='jdoe@ufl.edu' />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input name={'password'} type={'password'} placeholder='Password' />
                            </Form.Field>
                            <Form.Field>
                                <label>Confirm Password</label>
                                <input name={'password2'} type={'password'} placeholder='Password' />
                            </Form.Field>
                            <Form.Field>
                                <Form.Select
                                    fluid
                                    label='Role'
                                    options={options}
                                    placeholder='Role'
                                />
                            </Form.Field>
                        </Form>
                    </Card.Description>

                    <div style={styles.buttons}>
                        <Link to={'/'}>
                            <Button color={'red'} style={styles.button}>Back</Button>
                        </Link>
                        <Link to={'/dashboard'}>
                            <Button color={'blue'} style={styles.button}>Sign Up</Button>
                        </Link>
                    </div>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Home;
