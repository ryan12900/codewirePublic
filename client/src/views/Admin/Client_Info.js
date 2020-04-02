import React from 'react';
import {Link} from "react-router-dom";
import { Button, Card,Container,Segment,Grid,Header } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import axios from 'axios';
import serverURL from '../../assets/server-url';
import Footer from "../../components/Footer/Footer";

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
               <Segment.Group>
                   <Segment color='teal' >Name: {data.firstName} {data.lastName}</Segment>
                   <Segment color='teal' >QuizScore: {data.quizScore}</Segment>
                   <Segment color='teal '>Email: {data.email} </Segment>
               </Segment.Group>
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
                            {list}
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
