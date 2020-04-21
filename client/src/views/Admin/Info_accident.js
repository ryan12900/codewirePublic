import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react';
import { Button, Card, Input, Icon } from 'semantic-ui-react';
import '../main.css';
import styles from "../styles";
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import Redirect from "react-router-dom/es/Redirect";
import {useState} from "react";
import serverURL from '../../assets/server-url';


class Info_accident extends React.Component {

    state = {
        index:0,
        data: [],
        tableRows: [],
        displayBar: false,
        barState: {
            labels: [],
            datasets: [{
                label: 'Number of Uploaded Accidents',
                borderColor: 'rgba(0,0,0,1)',
                backgroundColor: [],
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
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                    }
                }]
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

        const colors = ['red','blue','green','pink','purple','yellow'];

        let index = Math.floor(Math.random() * Math.floor(5));
        let filtered = this.state.data.filter(accident=>accident.city.toLowerCase() === this.state.currCity.toLowerCase());
        let count = filtered.length;

        this.state.barState.datasets[0].data.push(count);
        this.state.barState.datasets[0].backgroundColor.push(colors[index]);

        this.setState({

            index: this.state.index++,
            barState:{
                labels: this.state.barState.labels,
                datasets:this.state.barState.datasets
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
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                        }
                    }]
                }
            },
            currCity:'',
            displayBar: true
        });
    }


    updateCity =(e)=>{
        const buffer = e.target.value.toLowerCase();
        const city_ = buffer.charAt(0).toUpperCase() + buffer.substring(1);
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
                                compact color={"red"}
                                onClick={this.addCity.bind(this)}
                                icon labelPosition='right'>
                                    Add City
                                    <Icon name='arrow right'/>
                                </Button>
                            {this.displayGraph()}
                        </div>
                    </Card.Content>
                </Card>
            </Container>
        );
    }
}

export default Info_accident;
