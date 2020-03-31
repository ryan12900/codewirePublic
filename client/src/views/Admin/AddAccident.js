import React from 'react';
import {Link} from "react-router-dom";
import {Container, Form} from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import styles from "../styles";
import NavBar_Admin from "../../components/Header/NavBar_Admin";
import Footer from "../../components/Footer/Footer";

function AddAccident() {
    return (
        <div>
        <NavBar_Admin/>
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Accident Information</h1>
                    </Card.Header>
                    <Card.Description >
                        <Form style={styles.form}>
                            <Form.Field>
                                <label>Date</label>
                                <input required name={'date'} type='date'></input>
                            </Form.Field>
                            <Form.Field>
                                <label>Time</label>
                                <input required name={'time'} type='time'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Name of Victim</label>
                                <input required name={'name_victim'} placeholder="Full Name of Victim" />
                            </Form.Field>
                            <Form.Field>
                                <label>Name of Fault driver </label>
                                <input required name={'name_guilty'} placeholder='Fault driver' />
                            </Form.Field>
                            <Form.Field>
                                <label>City</label>
                                <input required name={'City'} placeholder='City' />
                            </Form.Field>
                            <Form.Field>
                                <label>State</label>
                                <input required name={'State'} placeholder='State'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Number of Persons Involved in the Accident</label>
                                <input required name={"Number_person"} type='number' min='1' max='15'/>
                            </Form.Field>
                        </Form>
                    </Card.Description>
                    <div style={styles.buttons}>
                        <Link to={'/admin'}>
                            <Button color={'red'} style={styles.button}>Back</Button>
                        </Link>
                        <Button color={'blue'} style={styles.button} >Submit</Button>
                    </div>
                </Card.Content>
            </Card>
        </Container>
            <Footer/>
        </div>
    );
}

export default AddAccident;
