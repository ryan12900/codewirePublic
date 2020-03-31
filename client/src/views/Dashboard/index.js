import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card,Input } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import axios from 'axios';
import serverURL from '../../assets/server-url';

function Dashboard() {

    const [weather,setweather] = React.useState({
        city:'',
    });

    //Handler
    const handlechange= (e) => {
        const weather_ = e.target.value;
        setweather(weather_);
    };

    const handleSubmit = (e) =>{
      e.preventDefault();

      axios.get(`${serverURL}/weather/`+weather)
          .then(response => {
              alert("Working");
              console.log(weather);
              console.log(response.data);
          })
          .catch(err =>{
              console.log(weather);
              console.log(err);
          })
    };


    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Dashboard</h1>
                    </Card.Header>
                    <Card.Description >
                        <h2>Weather Information</h2>
                        <label> City </label>
                            <Input type="name" placeholder="City" value={weather.city}  onChange={handlechange} />
                    </Card.Description>
                    <div>
                    <Button color={'blue'} style={styles.button} onClick={handleSubmit} style={styles.button}>Submit</Button>
                    </div>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Dashboard;
