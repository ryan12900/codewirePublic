import React from 'react';
import {Link} from "react-router-dom";
import { Button, Card,Input,Header,Segment,Container,Grid} from 'semantic-ui-react'
import '../main.css'
import styles from "../styles";
import axios from 'axios';
import serverURL from '../../assets/server-url';
import {Bar} from 'react-chartjs-2';

function Dashboard() {
    //States

    const [weather,setweather] = React.useState('');
    const [weather1,setweather1] = React.useState('');
    const [weather2,setweather2] = React.useState('');
    const [weather3,setweather3] = React.useState('');
    const [weather4,setweather4] = React.useState('');
    const [weather5,setweather5] = React.useState('');
    const [data,setdata] = React.useState({
        city:" ",
        cloud:undefined,
        descp:" ",
        humidity:undefined,
        temp: undefined,
        temp_min: undefined,
        temp_max: undefined,
        visibility:undefined,
        wind_speed:undefined,
    });
    const [data1,setdata1] = React.useState({
        city:" ",
        cloud:undefined,
        descp:" ",
        humidity:undefined,
        temp: undefined,
        temp_min: undefined,
        temp_max: undefined,
        visibility:undefined,
        wind_speed:undefined,
    });
    const [data2,setdata2] = React.useState({
        city:" ",
        cloud:undefined,
        descp:" ",
        humidity:undefined,
        temp: undefined,
        temp_min: undefined,
        temp_max: undefined,
        visibility:undefined,
        wind_speed:undefined,
    });
    const [data3,setdata3] = React.useState({
        city:" ",
        cloud:undefined,
        descp:" ",
        humidity:undefined,
        temp: undefined,
        temp_min: undefined,
        temp_max: undefined,
        visibility:undefined,
        wind_speed:undefined,
    });
    const [data4,setdata4] = React.useState({
        city:" ",
        cloud:undefined,
        descp:" ",
        humidity:undefined,
        temp: undefined,
        temp_min: undefined,
        temp_max: undefined,
        visibility:undefined,
        wind_speed:undefined,
    });
    const [data5,setdata5] = React.useState({
        city:" ",
        cloud:undefined,
        descp:" ",
        humidity:undefined,
        temp: undefined,
        temp_min: undefined,
        temp_max: undefined,
        visibility:undefined,
        wind_speed:undefined,
    });

    //Handler
    const handlechange= (e) => {
        const weather_ = e.target.value;
        setweather(weather_);
    };
    const handlechange1= (e) => {
        const weather_ = e.target.value;
        setweather1(weather_);
    };
    const handlechange2= (e) => {
        const weather_ = e.target.value;
        setweather2(weather_);
    };
    const handlechange3= (e) => {
        const weather_ = e.target.value;
        setweather3(weather_);
    };
    const handlechange4= (e) => {
        const weather_ = e.target.value;
        setweather4(weather_);
    };
    const handlechange5= (e) => {
        const weather_ = e.target.value;
        setweather5(weather_);
    };
    const [barState,setBar] = React.useState({
        labels:["","","","",""],
        datasets: [
            {
                label: " ",
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [undefined,undefined,undefined,undefined,undefined]               
            }
        ]
    });
    const [optionState,setOption] = React.useState({
        title:{
            display:false,
            text: '',
            fontSize: 20
        },
        legend:{
            display:false,
            position:'right'
        }
    });
    const handleSubmit10 = (e) => {
        e.preventDefault();//Default

        axios.get(`${serverURL}/weather/`+weather)
        .then(response => {
            alert("Weather in "+weather);
            const info = response.data.data;

            setdata({...data,
                city: info.name,
                descp: info.weather[0].description.charAt(0).toUpperCase() + info.weather[0].description.slice(1),
                temp: ((info.main.temp-273.15) * (9/5) + 32).toFixed(2) + "° F",
                temp_min: ((info.main.temp_min-273.15) * (9/5) + 32).toFixed(2) + "° F",
                temp_max: ((info.main.temp_max-273.15) * (9/5) + 32).toFixed(2) + "° F",
                wind_speed: info.wind.speed,
                visibility: info.visibility,
                cloud: info.clouds.all,
                humidity: info.main.humidity
            });
        })
        .catch(err =>{
            console.log(err);
        })

    };
    const handleSubmit = (e) =>{
      e.preventDefault();//Default

          axios.get(`${serverURL}/weather/`+weather1)
          .then(response => {
              //alert("Weather1 in "+weather1);
              const info = response.data.data;

              setdata1({...data1,
                  city: info.name,
                  descp: info.weather[0].description,
                  temp: (info.main.temp-273.15) * (9/5) + 32,
                  temp_min: (info.main.temp_min-273.15) * (9/5) + 32,
                  temp_max: (info.main.temp_max-273.15) * (9/5) + 32,
                  wind_speed: info.wind.speed,
                  visibility: info.visibility,
                  cloud: info.clouds.all,
                  humidity: info.main.humidity
              });
          })
          .catch(err =>{
              console.log(err);
          })

        axios.get(`${serverURL}/weather/`+weather2)
          .then(response => {
              //alert("Weather2 in "+weather2);
              const info = response.data.data;

              setdata2({...data2,
                  city: info.name,
                  descp: info.weather[0].description,
                  temp: (info.main.temp-273.15) * (9/5) + 32,
                  temp_min: (info.main.temp_min-273.15) * (9/5) + 32,
                  temp_max: (info.main.temp_max-273.15) * (9/5) + 32,
                  wind_speed: info.wind.speed,
                  visibility: info.visibility,
                  cloud: info.clouds.all,
                  humidity: info.main.humidity
              });
          })
          .catch(err =>{
              console.log(err);
          })

          axios.get(`${serverURL}/weather/`+weather3)
          .then(response => {
              //alert("Weather3 in "+weather3);
              const info = response.data.data;

              setdata3({...data3,
                  city: info.name,
                  descp: info.weather[0].description,
                  temp: (info.main.temp-273.15) * (9/5) + 32,
                  temp_min: (info.main.temp_min-273.15) * (9/5) + 32,
                  temp_max: (info.main.temp_max-273.15) * (9/5) + 32,
                  wind_speed: info.wind.speed,
                  visibility: info.visibility,
                  cloud: info.clouds.all,
                  humidity: info.main.humidity
              });
          })
          .catch(err =>{
              console.log(err);
          })

          axios.get(`${serverURL}/weather/`+weather4)
          .then(response => {
              //alert("Weather4 in "+weather4);
              const info = response.data.data;

              setdata4({...data4,
                  city: info.name,
                  descp: info.weather[0].description,
                  temp: (info.main.temp-273.15) * (9/5) + 32,
                  temp_min: (info.main.temp_min-273.15) * (9/5) + 32,
                  temp_max: (info.main.temp_max-273.15) * (9/5) + 32,
                  wind_speed: info.wind.speed,
                  visibility: info.visibility,
                  cloud: info.clouds.all,
                  humidity: info.main.humidity
              });
          })
          .catch(err =>{
              console.log(err);
          })

          axios.get(`${serverURL}/weather/`+weather5)
          .then(response => {
             // alert("Weather5 in "+weather5);
              const info = response.data.data;

              setdata5({...data5,
                  city: info.name,
                  descp: info.weather[0].description,
                  temp: (info.main.temp-273.15) * (9/5) + 32,
                  temp_min: (info.main.temp_min-273.15) * (9/5) + 32,
                  temp_max: (info.main.temp_max-273.15) * (9/5) + 32,
                  wind_speed: info.wind.speed,
                  visibility: info.visibility,
                  cloud: info.clouds.all,
                  humidity: info.main.humidity
              });
          })
          .catch(err =>{
              console.log(err);
          })
          alert("Cities submitted!\nPlease click an option to view the graph");
          //handleSubmit3(e);
    };
    const  handleSubmit3 = (e) =>{
        e.preventDefault();//Default
        setOption({
            title:{
                display:true,
                text:'Cloudiness',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }            
        });
        setBar({
            labels: [data1.city, data2.city, data3.city,
            data4.city, data5.city],
            datasets: [
                {
                    label: 'Percentage (%)',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [data1.cloud, data2.cloud, data3.cloud, data4.cloud, data5.cloud]
                }
            ]
        }
    )};
    const handleSubmit2 = (e) =>{
        e.preventDefault();//Default
        setOption({
            title:{
                display:true,
                text:'Visibility',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }            
        });
        setBar({
            labels: [data1.city, data2.city, data3.city,
            data4.city, data5.city],
            datasets: [
                {
                    label: 'Meters (m)',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [data1.visibility, data2.visibility, data3.visibility, data4.visibility, data5.visibility]
                }
            ]
        }
    )};

    const handleSubmit4 = (e) =>{
        e.preventDefault();//Default
        setOption({
            title:{
                display:true,
                text:'Humidity',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }            
        });
        setBar({
            labels: [data1.city, data2.city, data3.city,
            data4.city, data5.city],
            datasets: [
                {
                    label: 'Percentage (%)',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [data1.humidity, data2.humidity, data3.humidity, data4.humidity, data5.humidity]
                }
            ]
        }
    )};

    const handleSubmit5 = (e) =>{
        e.preventDefault();//Default
        setOption({
            title:{
                display:true,
                text:'Temperature',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }            
        });
        setBar({
            labels: [data1.city, data2.city, data3.city,
            data4.city, data5.city],
            datasets: [
                {
                    label: 'Fahrenheit (F)',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [data1.temp, data2.temp, data3.temp, data4.temp, data5.temp]
                }
            ]
        }
    )};

    const handleSubmit6 = (e) =>{
        e.preventDefault();//Default
        setOption({
            title:{
                display:true,
                text:'Wind Speed',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }            
        });
        setBar({
            labels: [data1.city, data2.city, data3.city,
            data4.city, data5.city],
            datasets: [
                {
                    label: 'Meters Per Second (m/s)',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [data1.wind_speed, data2.wind_speed, data3.wind_speed, data4.wind_speed, data5.wind_speed]
                }
            ]
        }
    )};
     
    return (
        <Container style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Card.Header>
                        <h1 style={styles.heading}>Weather Information</h1>
                    </Card.Header>
                    <Card.Description >
                        <h2>Enter 5 cities</h2>
                        <label> Cities </label>
                            <Input type="name" placeholder="City 1" value={weather1}  onChange={handlechange1} />
                            <Input type="name" placeholder="City 2" value={weather2}  onChange={handlechange2} />
                            <Input type="name" placeholder="City 3" value={weather3}  onChange={handlechange3} />
                            <Input type="name" placeholder="City 4" value={weather4}  onChange={handlechange4} />
                            <Input type="name" placeholder="City 5" value={weather5}  onChange={handlechange5} />
                    </Card.Description>
                    <div>
                    <Button compact color={'blue'} style={styles.button} onClick={handleSubmit}>Submit</Button>

                    </div>
                    <div>
                        <Bar 
                            data = {barState}
                            options={optionState}
                        />
                        <Button compact color={'blue'} style={styles.button} onClick={handleSubmit3}>Cloudiness</Button>
                        <Button compact color={'blue'} style={styles.button} onClick={handleSubmit4}>Humidity</Button>
                        <Button compact color={'blue'} style={styles.button} onClick={handleSubmit5}>Temperature</Button>
                        <Button compact color={'blue'} style={styles.button} onClick={handleSubmit2}>Visibility</Button>
                        <Button compact color={'blue'} style={styles.button} onClick={handleSubmit6}>Wind</Button>
                        <Header as='h3' textAlign='center'>Find Weather for a Specific City</Header>
                        <label> City </label>
                            <Input type="name" placeholder="City" value={weather}  onChange={handlechange} />
                        <div>
                             <Button compact color={'blue'} style={styles.button} onClick={handleSubmit10}>Submit</Button>
                        </div>                           
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
