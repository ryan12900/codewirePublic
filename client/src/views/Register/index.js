import React from 'react';
import {Link} from "react-router-dom";
import {Container, Form} from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import styles from "../styles";
import '../main.css'
import axios from 'axios'
import serverUrl from '../../assets/server-url';
import Redirect from "react-router-dom/es/Redirect";
import RegistrationCode from "./RegistrationCode"

function Register() {
    // States
    const [form, setForm] = React.useState({
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       password2: '',
        role: '',
        code: '',
        agentId: '',
        address:'',
        dashcam:'',
        phone:'',
        addy:'',
        city:'',
        state:''
    });
    const [registrationStatus, setRegistrationStatus] = React.useState(false);

    // Handlers
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
        axios.post(`${serverUrl}/users/register`, form)
            .then(() => {
                alert("User was successfully created");
                setRegistrationStatus(true);
            })
            .catch(() => {
                alert("An error occurred while registering!");
                setRegistrationStatus(false);
            })
    };

    // Local component Data
    const options = [
        { key: 'a', text: 'Agent', value: 'agent' },
        { key: 'c', text: 'Customer', value: 'customer' },
    ];


    // Conditional Rendering
    if(registrationStatus){
        return (<Redirect to={'/log-in'}/>)
    }

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
                            <RegistrationCode form={form} handleChange={handleChange}/>
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

export default Register;
