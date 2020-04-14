import React from 'react';
import {Link} from "react-router-dom";
import { Button, Card,Input,Header,Segment,Container,Grid} from 'semantic-ui-react'
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
              alert("Weather in "+weather);
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
                    <Button compact color={'blue'} style={styles.button} onClick={handleSubmit}>Submit</Button>
                    </div>
                    <div>
                        <Header as='h3' textAlign='center'>Current Weather in {data.city}</Header>
                        <Grid container columns={2} stackable>
                        <Grid.Column>
                            <Segment color="blue">Description: {data.descp}</Segment>
                        </Grid.Column>
                            <Grid.Column>
                        <Segment color="blue">Temperature: {data.temp}</Segment>
                            </Grid.Column>
                        <Grid.Column>
                            <Segment color="blue">Max Temperature: {data.temp_max}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment color="blue" >Min Temperature: {data.temp_min}</Segment>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default Dashboard;
