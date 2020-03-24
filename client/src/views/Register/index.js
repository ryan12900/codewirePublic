import React from 'react';
import {Link} from "react-router-dom";
import {Container, Form} from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import '../main.css'
import axios from 'axios'
import serverUrl from '../../assets/server-url';

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
    const [form, setForm] = React.useState({
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       password2: '',
        role: '',
    });

    const handleChange = (e, data) => {  // We use 'data' for semantic ui components.
        let name, value;
        if(data){
            name = data.name;
            value = data.value;
        } else {
            name = e.target.name;
            value = e.target.value;
        }

        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${serverUrl}/register`, form)
            .then(() => {
                alert("User was successfully created")
            })
            .catch(() => {
                alert("An error occurred while registering!");
            })
    };


    const options = [
        { key: 'a', text: 'Agent', value: 'agent' },
        { key: 'c', text: 'Customer', value: 'customer' },
    ];

    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Register</h1>
                    </Card.Header>
                    <Card.Description >
                        <Form style={styles.form}>
                            <Form.Field>
                                <label>First Name</label>
                                <input required name={'firstName'} placeholder='John' onChange={handleChange} value={form.firstName}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input required name={'lastName'} placeholder='Doe' onChange={handleChange} value={form.lastName}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input required name={'email'} type={'email'} placeholder='jdoe@ufl.edu' onChange={handleChange} value={form.email}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input name={'password'} type={'password'} placeholder='Password' onChange={handleChange} value={form.password}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Confirm Password</label>
                                <input name={'password2'} type={'password'} placeholder='Password' onChange={handleChange} value={form.password2}/>
                            </Form.Field>
                            <Form.Field>
                                <Form.Select
                                    name={'role'}
                                    fluid
                                    label='Role'
                                    options={options}
                                    placeholder='Role'
                                    onChange={handleChange}
                                    value={form.role}
                                />
                            </Form.Field>
                        </Form>
                    </Card.Description>

                    <div style={styles.buttons}>
                        <Link to={'/'}>
                            <Button color={'red'} style={styles.button}>Back</Button>
                        </Link>
                            <Button color={'blue'} style={styles.button} onClick={handleSubmit}>Sign Up</Button>
                    </div>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Home;
