import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";

function Statistic_city() {
    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Info about /*City*/</h1>
                    </Card.Header>
                    <Card.Description >
                    </Card.Description>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Statistic_city;
