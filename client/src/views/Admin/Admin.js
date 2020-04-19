import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card} from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import IndexJs from "../../components/Navbar/index.js";
import Footer from "../../components/Footer/Footer";

function Admin() {
    return (
        <div>
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Hello Agent</h1>
                        <h3>What would you like to do today?</h3>
                    </Card.Header>
                    <Card.Description >
                        <Link to={"/add_accident"}>
                        <Button animated='fade' color='red' style={styles.button_Admin}>
                            <Button.Content visible> Add Accident</Button.Content>
                            <Button.Content hidden>Accident</Button.Content>
                        </Button>
                        </Link>
                        <Link to={"info_accident"}>
                        <Button animated="fade" color="green" style={styles.button_Admin}>
                            <Button.Content visible> View Accident Information</Button.Content>
                            <Button.Content hidden> Accident </Button.Content>
                        </Button>
                        </Link>
                        <Link to={"/client_info"}>
                        <Button animated='fade' color='teal' style={styles.button_Admin}>
                            <Button.Content visible> View Client Information</Button.Content>
                            <Button.Content hidden>Client</Button.Content>
                        </Button>
                        </Link>
                        <Link to={"statistic_city_admin"}>
                        <Button animated="fade" color="blue" style={styles.button_Admin}>
                            <Button.Content visible> View City Statistics</Button.Content>
                            <Button.Content hidden> City </Button.Content>
                        </Button>
                        </Link>
                    </Card.Description>
                </Card.Content>
            </Card>
        </Container>
            <Footer/>
        </div>
    );
}

export default Admin;
