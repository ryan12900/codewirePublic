import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card , Form} from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";

function Home() {
    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>LogIn</h1>
                    </Card.Header>
                    <Card.Description >
                        <Form style={styles.form}>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='myemail@ufl.edu' />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input type={'password'} placeholder='Password' />
                            </Form.Field>
                        </Form>
                    </Card.Description>

                    <div style={styles.buttons}>
                        <Link to={'/'}>
                            <Button color={'red'} style={styles.button}>Back</Button>
                        </Link>
                        <Link to={'/dashboard'}>
                            <Button color={'blue'} style={styles.button}>Log In</Button>
                        </Link>
                    </div>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Home;
