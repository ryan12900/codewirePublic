import React from 'react';
import {Link} from "react-router-dom";
import {Container, Form} from 'semantic-ui-react'
import { Button, Card} from 'semantic-ui-react'
import '../main.css'
import styles from "../styles"
import axios from 'axios';
import serverURL from '../../assets/server-url'

function Statistic_city() {
    const [data, setData] = React.useState([]);
    const [form, setForm] = React.useState({
        state: '',
        year: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value})
    };

    const handleSubmit = (e) => {
        const {state, year} = form;
        e.preventDefault();

        axios.get(`${serverURL}/accidents/states=${state}/years=${year}`)
            .then((response) =>{
                alert(`The number of accidents in ${state} in ${year} was ${response.data[0].length}`);
        }).catch(() => {
            alert("There was an error retrieving the data.")
        })
    };

    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Accident information: </h1>
                    </Card.Header>
                    <Card.Description >
                        <Form style={styles.form}>
                            <Form.Field>
                                <label>State</label>
                                <input name={'state'} placeholder='Florida' value={form.state} onChange={handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Year</label>
                                <input name={'year'} type={'number'} placeholder='2016' value={form.year} onChange={handleChange}/>
                            </Form.Field>


                            <Button onClick={handleSubmit}>Get number of accidents</Button>
                        </Form>

                    </Card.Description>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Statistic_city;
