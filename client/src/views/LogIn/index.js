import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card , Form} from 'semantic-ui-react'
import '../main.css'

const styles = {
    container: {
        height: "100vh"
    },
    card: {
        margin: '15% auto',
        width: '80%',
        height: 'auto',
        textAlign: 'center',
        padding: '25px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    heading: {
        fontSize: '45px'
    },
    form: {
        textAlign: 'left'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '30%',
        margin: '25px auto',
    },
    button: {
        fontSize: '17px'
    }
};

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
                        <Button color={'blue'} style={styles.button}>Log In</Button>
                    </div>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Home;
