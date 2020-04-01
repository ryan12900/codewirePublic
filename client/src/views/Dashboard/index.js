import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card,Input } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import axios from 'axios';
import serverURL from '../../assets/server-url';

function Dashboard() {

    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Dashboard</h1>
                    </Card.Header>
                    <Card.Description >
                        <h2>Select an option</h2>
                    </Card.Description>
                    <Link to={'/weather'}>
                        <Button>Weather</Button>
                    </Link>
                    <br/><br/>
                    <Link to={'/quiz'}>
                        <Button>Driver Safety Quiz</Button>
                    </Link>
                    <br/><br/>
                    <Link to={'/statistic_city'}>
                        <Button>Accidents</Button>
                    </Link>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Dashboard;
