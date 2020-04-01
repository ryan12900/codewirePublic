import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import axios from 'axios';
import serverURL from '../../assets/server-url';

function Client_info() {

    const [data,setdata] = React.useState([]);

    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.get(`${serverURL}/customer/`)
          .then(response =>{
              setdata(response.data.data);
          })
          .catch(err=>{
              console.log(err);
          })
    };

    const list = data.map((data) => {
        if(data.role === 'customer') {
            return (
                <div>
                    <li>QuizScore: {data.quizScore}</li>
                    <li>Name: {data.firstName} {data.lastName}</li>
                    <li>Email: {data.email}</li>
                </div>
            )
        }
    });

    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Information about Clients</h1>
                        <div>
                            <Button color={'tea'} style={styles.button} onClick={handleSubmit}>View Info</Button>
                        </div>
                        <div>
                            <ul> Clients
                                {list}
                            </ul>
                        </div>
                    </Card.Header>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Client_info;
