import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react';
import { Button, Card, Input } from 'semantic-ui-react';
import '../main.css';
import styles from "../styles";
import axios from 'axios';
import serverURL from '../../assets/server-url';
import {Bar} from 'react-chartjs-2';
import Redirect from "react-router-dom/es/Redirect";
import {useState} from "react";

class Info_accident extends React.Component {

    state = {
        data: [],
        tableRows: [],
        displayBar: false,
        barState: {
            labels: [],
            datasets: [{
                label: 'Number of Uploaded Accidents',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                minBarLength: 2,
                data: []
            }]
        },
        barOptionState:{
            title:{
                display:true,
                text: 'Accident Data',
                fontSize:20
            },
            legend: {
                display:true,
                position: 'top'
            }
        },
        currCity: ''
    };

    async componentDidMount() {
            const response = await axios.get(`${serverURL}/admin/accidents`);
            let data = response.data;
            await this.setState({data: data});
            data = data.map((accident) => {
                return (
                    <tr>
                        <td data-label="date">{accident.date}</td>
                        <td data-label="time">{accident.time}</td>
                        <td data-label="victim">{accident.nameOfVictim}</td>
                        <td data-label="driver">{accident.nameOfFaultDriver}</td>
                        <td data-label="address">{accident.address}</td>
                        <td data-label="city">{accident.city}</td>
                        <td data-label="state">{accident.state}</td>
                        <td data-label="people-involved">{accident.numPeopleInvolved}</td>
                        <td data-label="options">
                            <Link>
                                <Button color={'red'}
                                onClick={this.handleClick(accident._id)}>Delete</Button>
                            </Link>
                        </td>
                    </tr>
                )

            });
            this.setState({tableRows: data})
    }


    handleClick(id) {
        return async () => {
            await axios.delete(`${serverURL}/admin/accident/${id}`);
            const response = await axios.get(`${serverURL}/admin/accidents`);
            let data = response.data;
            await this.setState({data: data});
            data = data.map((accident) => {
                return (
                    <tr>
                        <td data-label="date">{accident.date}</td>
                        <td data-label="time">{accident.time}</td>
                        <td data-label="victim">{accident.nameOfVictim}</td>
                        <td data-label="driver">{accident.nameOfFaultDriver}</td>
                        <td data-label="address">{accident.address}</td>
                        <td data-label="city">{accident.city}</td>
                        <td data-label="state">{accident.state}</td>
                        <td data-label="people-involved">{accident.numPeopleInvolved}</td>
                        <td data-label="options">
                            <Link>
                                <Button color={'red'}
                                        onClick={this.handleClick(accident._id)}>Delete</Button>
                            </Link>
                        </td>
                    </tr>
                )

            });
            this.setState({tableRows: data})

        }
    }

    displayGraph(){
        if(this.state.displayBar){
            return <Bar
                data={this.state.barState}
                options={this.state.barOptionState}
            />;
        }
        else{
            return;
        }
    }

    addCity(){
        this.state.barState.labels.push(this.state.currCity);

        let filtered = this.state.data.filter(accident=>accident.city === this.state.currCity);
        let count = filtered.length;

        this.state.barState.datasets[0].data.push(count);

        this.setState({

            barState:{
                labels: this.state.barState.labels,
                datasets: this.state.barState.datasets
            },
            barOptionState:{
                title:{
                    display:true,
                    text: this.state.currCity,
                    fontSize:20
                },
                legend: {
                    display:true,
                    position: 'top'
                }
            },
            currCity:'',
            displayBar: true
        });
    }


    updateCity =(e)=>{
        const city_ = e.target.value;
        this.setState({currCity: city_})
    }

    render() {
        return (
            <Container style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content style={styles.content}>
                        <Card.Header>
                            <h1 style={styles.heading}>Accidents</h1>
                        </Card.Header>

                        <table className="ui red celled table">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Victim</th>
                                <th>Driver</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>People involved</th>
                                <th>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.tableRows}
                            </tbody>
                        </table>

                        <div>
                            <Card.Description>Add Cities to View Comparison</Card.Description>
                            <Input
                                type={"text"}
                                placeholder={"City"}
                                value = {this.state.currCity}
                                onChange={this.updateCity.bind(this)}
                            />
                            <Button
                                style={styles.button}
                                color={"blue"}
                                onClick={this.addCity.bind(this)}
                            >Add City</Button>
                            {this.displayGraph()}
                        </div>

                    </Card.Content>
                </Card>
            </Container>
        );
    }
}

export default Info_accident;
