import React from 'react';
import {Link} from "react-router-dom";
import {Container, Form} from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import styles from "../styles";
import IndexJs from "../../components/Navbar/index.js";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import serverURL from "../../assets/server-url";

function AddAccident() {

    const [form, setForm] = React.useState({
        date: '',
        time: '',
        nameOfVictim: '',
        nameOfFaultDriver: '',
        address:'',
        city: '', state: '',
        numPeopleInvolved: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${serverURL}/admin/accident`, form)
            .then((response) =>{
                alert(`Successfully recorded accident!`);
            }).catch(() => {
            alert("There was an error recording the accident.")
        })
        setForm({
            date: '',
            time: '',
            nameOfVictim: '',
            nameOfFaultDriver: '',
            address:'',
            city: '', state: '',
            numPeopleInvolved: ''
        });
        
    };

    return (
        <div>
        <IndexJs/>
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Accident Report</h1>
                    </Card.Header>
                    <Card.Description >
                        <Form style={styles.form}>
                            <Form.Field>
                                <label>Date</label>
                                <input required name={'date'} type='date' onChange={handleChange} value={form.date}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Time</label>
                                <input required name={'time'} type='time' onChange={handleChange} value={form.time}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Name of Victim</label>
                                <input required name={'nameOfVictim'} placeholder="Full Name of Victim"  onChange={handleChange} value={form.nameOfVictim}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Name of Fault driver </label>
                                <input required name={'nameOfFaultDriver'} placeholder='Fault driver'  onChange={handleChange} value={form.nameOfFaultDriver}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input required name={'address'} placeholder='Address'  onChange={handleChange} value={form.address}/>
                            </Form.Field>
                            <Form.Field>
                                <label>City</label>
                                <input required name={'city'} placeholder='City'  onChange={handleChange} value={form.city}/>
                            </Form.Field>
                            <Form.Field>
                                <label>State</label>
                                <input required name={'state'} placeholder='State' onChange={handleChange} value={form.state}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Number of Persons Involved in the Accident</label>
                                <input required name={"numPeopleInvolved"} type='number' min='1' max='15' onChange={handleChange} value={form.numPeopleInvolved}/>
                            </Form.Field>
                        </Form>
                    </Card.Description>
                    <div style={styles.buttons}>
                        <Link to={'/admin'}>
                            <Button color={'red'} style={styles.button}>Back</Button>
                        </Link>
                        <Button color={'blue'} style={styles.button} onClick={handleSubmit} >Submit</Button>
                    </div>
                </Card.Content>
            </Card>
        </Container>
            <Footer/>
        </div>
    );
}

export default AddAccident;
