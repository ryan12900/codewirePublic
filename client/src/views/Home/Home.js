import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import '../main.css'
import styles from '../styles'
import Footer from "../../components/Footer/Footer";


function SignUp() {
    return (
        <div>
        <Container style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content style={styles.content}>
                        <Card.Header>
                            <h  style={styles.heading}>CityRanker</h>
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
            <Footer/>
        </div>
    );
}

export default SignUp;
