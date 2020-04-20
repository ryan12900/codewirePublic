import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import axios from 'axios'
import serverURL from '../../assets/server-url'
import Redirect from "react-router-dom/es/Redirect";

class Info_accident extends React.Component {

    state = {
        tableRows: []
    };

    async componentDidMount() {
            const response = await axios.get(`${serverURL}/admin/accidents`);
            let data = response.data;
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

                    </Card.Content>
                </Card>
            </Container>
        );
    }
}

export default Info_accident;
