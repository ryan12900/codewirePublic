import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card,Input } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";

function Dashboard() {

    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Dashboard</h1>
                        <h2>Select an option</h2>
                    </Card.Header>
                    <Card.Description >
                        <Link to={'/weather'}>
                            <Button animated='fade' color='blue' style={styles.button_Admin}>
                            <Button.Content visible> View Weather </Button.Content>
                            <Button.Content hidden> Weather </Button.Content>
                            </Button>
                        </Link>
                        <Link to={'/quiz'}>
                            <Button animated='fade' color='teal' style={styles.button_Admin}>
                                <Button.Content visible> Driver Safety Quiz </Button.Content>
                                <Button.Content hidden> Quiz </Button.Content>
                            </Button>
                        </Link>
                        <Link to={'/statistic_city'}>
                            <Button animated='fade' color='red' style={styles.button_Admin}>
                                <Button.Content visible> View Accidents </Button.Content>
                                <Button.Content hidden> Accidents </Button.Content>
                            </Button>
                        </Link>
                    </Card.Description>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Dashboard;
