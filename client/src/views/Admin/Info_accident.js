import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";

function Info_accident() {
    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Info about an accident</h1>
                    </Card.Header>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Info_accident;
