import React from 'react';
import {Link, Redirect} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card , Form} from 'semantic-ui-react'
import axios from 'axios';
import serverURL from '../../assets/server-url';
import '../main.css'
import styles from "../styles";

function Login() {
    // States
    const [form, setForm] = React.useState({
        email: '',
        password: '',
    });
    const [loginStatus, setLoginStatus] = React.useState(false);

    // Handlers
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${serverURL}/users/login`, form)
            .then(() => {
                alert("You were successfully logged in!");
                setLoginStatus(true);
            })
            .catch(() => {
                alert("There was an error logging you in!");
                setLoginStatus(false);
            })
    };

    if(loginStatus){
        return <Redirect to={'/dashboard'}/>
    }

    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>LogIn</h1>
                    </Card.Header>
                    <Card.Description >
                        <Form style={styles.form}>
                            <Form.Field>
                                <label>Email</label>
                                <input name={'email'} placeholder='myemail@ufl.edu' value={form.email} onChange={handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input name={'password'} type={'password'} placeholder='Password' value={form.password} onChange={handleChange}/>
                            </Form.Field>
                        </Form>
                    </Card.Description>

                    <div style={styles.buttons}>
                        <Link to={'/'}>
                            <Button color={'red'} style={styles.button}>Back</Button>
                        </Link>
                        <Button color={'blue'} style={styles.button} onClick={handleSubmit}>Log In</Button>
                    </div>
                </Card.Content>
            </Card>
        </Container>
    );

}

export default Login;
