import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import axios from 'axios';
import serverURL from '../../assets/server-url';

function Client_info() {
    const [data,setdata] = React.useState({
        quizScore: undefined,
        name: " ",
        email:" ",
    });

    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.get(`${serverURL}/customer/`)
          .then(response =>{
              alert("Working!!!!");
              const client_info = response.data.data[0];

              setdata({...data,
              quizScore: client_info.quizScore,
                  name: client_info.firstName + " "+ client_info.lastName,
                  email: client_info.email
              });

              console.log(response.data.data[0]);
          })
          .catch(err=>{
              console.log(err);
          })
    };
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
                                <li>QuizScore: {data.quizScore}</li>
                                <li>Name: {data.name}</li>
                                <li>Email: {data.email}</li>
                            </ul>
                        </div>
                    </Card.Header>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Client_info;
