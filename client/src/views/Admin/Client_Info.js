import React from 'react';
import {Link} from "react-router-dom";
import { Button, Card,Container,Table,Header,Icon } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import axios from 'axios';
import serverURL from '../../assets/server-url';
import Footer from "../../components/Footer/Footer";

function Client_info({auth}) {

    const [data,setdata] = React.useState([]);

    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.get(`${serverURL}/customer/${auth.agentId}`)
          .then(response =>{
              setdata(response.data.data);
          })
          .catch(err=>{
              console.log(err);
          })
    };

    const dash = (data)=>{
        if(data.dashcam === 'Yes') {
            return(
                <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large'/>
                </Table.Cell>
            )}
        else{
            return(
                <Table.Cell textAlign='center'>
                    <Icon color='red' name='close' size='large'/>
                </Table.Cell>
            )}
    };

    const list = data.map((data) => {
        if(data.role === 'customer') {
            return (
               <Table.Row>
                   <Table.Cell singleLine>{data.firstName} {data.lastName}</Table.Cell>
                   <Table.Cell singleLine>{data.email}</Table.Cell>
                   <Table.Cell singleLine>{data.phone}</Table.Cell>
                   <Table.Cell singleLine>{data.addy}</Table.Cell>
                   <Table.Cell singleLine>{data.city}</Table.Cell>
                   <Table.Cell singleLine>{data.state}</Table.Cell>
                   {dash(data)}
                   <Table.Cell textAlign='center'>{data.quizScore}</Table.Cell>
               </Table.Row>
            )
        }
    });

    return (
        <div>
        <Container style={styles.container}>
            <Card style={styles.card_client}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Client Information</h1>
                        <br></br>
                        <div>
                            <Button color='teal' style={styles.button} onClick={handleSubmit}>View Info</Button>
                        </div>
                        <div>
                            <br></br>
                            <Header as='h3' textAlign='center'> Client Information </Header>
                            <Table singleLine celled size='small' color='teal'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                                        <Table.HeaderCell>Address</Table.HeaderCell>
                                        <Table.HeaderCell>City</Table.HeaderCell>
                                        <Table.HeaderCell>State</Table.HeaderCell>
                                        <Table.HeaderCell>DashCam</Table.HeaderCell>
                                        <Table.HeaderCell>Quiz Score</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {list}
                                </Table.Body>
                            </Table>
                        </div>
                    </Card.Header>
                </Card.Content>
            </Card>
        </Container>
            <Footer/>
        </div>
    );
}

export default Client_info;
