import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import '../main.css'

const styles = {
    container: {
        height: "100vh"
    },
    card: {
        margin: '15% auto',
        width: '80%',
        height: '30%',
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
    mainText: {
        fontSize: '20px'
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

function SignUp() {
    return (
        <Container style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content style={styles.content}>
                        <Card.Header>
                            <h1 style={styles.heading}>CityRanker</h1>
                        </Card.Header>
                        <Card.Description >
                            <p style={styles.mainText}>CityRanker is a platform for users to compare city insurance rates around the United States.
                            With an account, users are able to compare a variety of cities based on insurance rates,
                                accident prevalence, and weather data.</p>
                        </Card.Description>

                        <div style={styles.buttons}>
                            <Link to={'/log-in'}>
                                <Button color={'blue'} style={styles.button}>Log In</Button>
                            </Link>
                            <Link to={'/register'}>
                                <Button color={'orange'} style={styles.button}>Sign Up</Button>
                            </Link>
                        </div>
                    </Card.Content>
                </Card>
        </Container>
    );
}

export default SignUp;
