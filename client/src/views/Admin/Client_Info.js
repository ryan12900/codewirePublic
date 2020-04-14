import React from 'react';
import {Link} from "react-router-dom";
import { Button, Card,Container,Segment,Grid,Header } from 'semantic-ui-react'
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

    const list = data.map((data) => {
        if(data.role === 'customer') {
            return (
               <tr>
                   <td data-label="name">{data.firstName} {data.lastName}</td>
                   <td data-label="quizScore">{data.quizScore}</td>
                   <td data-label="email">{data.email}</td>
               </tr>
            )
        }
    });

    return (
        <div>
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Information about Clients</h1>
                        <div>
                            <Button color='teal' style={styles.button} onClick={handleSubmit}>View Info</Button>
                        </div>
                        <div>
                            <br></br>
                            <Header as='h3' textAlign='center'> Client Information </Header>
                            <table className="ui red celled table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quiz Score</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list}
                                </tbody>
                            </table>
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
