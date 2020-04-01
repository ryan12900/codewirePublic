import React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Button, Card,Input } from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import axios from 'axios';
import serverURL from '../../assets/server-url';

function Dashboard() {
    //States
    const [weather,setweather] = React.useState('');
    const [data,setdata] = React.useState({
        city:" ",
        descp:" ",
        temp: undefined,
        temp_min: undefined,
        temp_max: undefined,
        wind_speed:undefined,
    });

    //Handler
    const handlechange= (e) => {
        const weather_ = e.target.value;
        setweather(weather_);
    };
    const handleSubmit = (e) =>{
      e.preventDefault();//Default
      axios.get(`${serverURL}/weather/`+weather)
          .then(response => {
              alert("Working");
              const info = response.data.data;

              setdata({...data,
                  city: info.name,
                  descp: info.weather[0].description,
                  temp: info.main.temp,
                  temp_min: info.main.temp_min,
                  temp_max: info.main.temp_max,
                  wind_speed: info.wind.speed
              });
          })
          .catch(err =>{
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
                            <Input type="name" placeholder="City" value={weather}  onChange={handlechange} />
                    </Card.Description>
                    <div>
                    <Button color={'blue'} style={styles.button} onClick={handleSubmit}>Submit</Button>
                    </div>
                    <div>
                        <ul>Current Weather
                            <li>City: {data.city}</li>
                            <li>Description: {data.descp}</li>
                            <li>Temperature: {data.temp}</li>
                            <li>Max Temperature: {data.temp_max}</li>
                            <li>Min Temperature: {data.temp_min}</li>
                       </ul>
                    </div>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Dashboard;
