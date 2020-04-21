import React from 'react';
import {Link, Redirect} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card , Form} from 'semantic-ui-react'
import axios from 'axios';
import '../main.css'
import styles from "../styles";
import serverURL from '../../assets/server-url';

function Login(props) {
    // Props
    const {setAuth} = props;


    // States
    const [form, setForm] = React.useState({
        email: '',
        password: '',
    });
    const [loginStatus, setLoginStatus] = React.useState('');

    // Handlers
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${serverURL}/users/login`, form)
            .then((response) => {
                alert("You were successfully logged in!");
                setAuth(response.data);
                setLoginStatus(response.data.role);
            })
            .catch(() => {
                alert("There was an error logging you in!");
                setLoginStatus('');
            })
    };

    if(loginStatus){
        if(loginStatus === 'customer'){
            return <Redirect to={'/dashboard'}/>
        }

        if(loginStatus === 'agent'){
            return <Redirect to={'/admin'}/>
        }
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
