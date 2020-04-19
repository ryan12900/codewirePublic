import React from 'react';
import {Link} from "react-router-dom";
import {Container, Form} from 'semantic-ui-react'
import { Button, Card} from 'semantic-ui-react'
import '../main.css'
import styles from "../styles"
import axios from 'axios';
import serverURL from '../../assets/server-url'

function Statistic_city() {
    const [accident1,setAccident1] = React.useState('');
    const [accident2,setAccident2] = React.useState('');
    const [accident3,setAccident3] = React.useState('');
    const [accident4,setAccident4] = React.useState('');
    const [accident5,setAccident5] = React.useState('');
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
                        <h1 style={styles.heading}>Accident Information</h1>
                    </Card.Header>
                    <Card.Description >
                        <h2>Enter 5 cities</h2>
                            <label> Cities </label>
                                <Input type="name" placeholder="City 1" value={accident1}  onChange={handlechange1} />
                                <Input type="name" placeholder="City 2" value={accident2}  onChange={handlechange2} />
                                <Input type="name" placeholder="City 3" value={accident3}  onChange={handlechange3} />
                                <Input type="name" placeholder="City 4" value={accident4}  onChange={handlechange4} />
                                <Input type="name" placeholder="City 5" value={accident5}  onChange={handlechange5} />
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
                    <div>
                        <Button compact color={'blue'} style={styles.button} onClick={handleSubmit}>Submit</Button>
                    </div>
                    <div>
                        <Bar 
                            data = {barState}
                            options={optionState}
                        />
                    </div>
                    <Button compact color={'blue'} style={styles.button} onClick={handleSubmit2}>Accidents</Button>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Statistic_city;
